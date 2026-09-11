import { NextResponse } from "next/server";
import { buildQuestionsSchema, normalizeQuestions } from "@/lib/enquiry/question-validation";
import { generateEnquiryPdf } from "@/lib/pdf/generate";
import { generateEnquiryNumber } from "@/lib/enquiry/numbering";
import { createAdminClient, verifySupabaseConnection } from "@/lib/supabase/admin";
import { syncEnquiryToGoogleSheets } from "@/lib/pdf/google-sheets-sync";
import type { Enquiry } from "@/types/enquiry";
import { getClientIp } from "@/lib/request/client-ip";
import { normalizeDob } from "@/lib/enquiry/dob";

export const runtime = "nodejs";
const legacyKeys = ['course', 'name', 'dob', 'gender', 'motherName', 'fatherName', 'address', 'mobile1', 'mobile2', 'email', 'class10Percent', 'class12Stream', 'class12Percent', 'physicsMarks', 'chemistryMarks', 'mathsMarks', 'biologyMarks', 'csMarks', 'schoolNameWithState', 'neetUgScore', 'neetPgScore', 'category', 'cuetScoreRank', 'cetScoreRank', 'clatScoreRank', 'catScoreRank', 'jeeMainsCrl', 'percentile', 'pcmPercent', 'pcbPercent', 'collegeUniversityName', 'courses', 'marks', 'reference', 'signatureDataUrl'];
const TERMS_VERSION = '2026-08-23';
const PRIVACY_VERSION = '2026-08-23';

function jsonError(message: string, status = 500) { return NextResponse.json({ ok: false, error: message }, { status }); }

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request.headers);
    if (!await verifySupabaseConnection()) return jsonError("Database connection unavailable.", 503);
    const body = await request.json().catch(() => null) as Record<string, unknown> | null;
    if (!body) return jsonError("Invalid request body.", 400);
    if (body.terms_accepted !== true) return jsonError('You must accept the Terms of Use and Privacy/Data Collection Policy.', 400);
    const questionsResult = await createAdminClient().from('form_questions').select('*').eq('active', true).order('display_order');
    if (questionsResult.error) return jsonError('Unable to load form configuration.', 503);
    const questions = normalizeQuestions(questionsResult.data);
    const answers = body.answers && typeof body.answers === 'object' ? body.answers as Record<string, unknown> : body;
    const normalizedAnswers = { ...answers, ...(typeof answers.dob === 'string' ? { dob: normalizeDob(answers.dob) } : {}) };
    const parsed = buildQuestionsSchema(questions).safeParse(normalizedAnswers);
    if (!parsed.success) return NextResponse.json({ ok: false, error: "Please check the form fields.", fields: parsed.error.flatten().fieldErrors }, { status: 400 });
    const now = new Date();
    const enquiryNumber = await generateEnquiryNumber();
    const answerValues = parsed.data as Record<string, string>;
    const enquiry: Enquiry = { ...answerValues, answers: answerValues, enquiryNumber, date: now.toLocaleDateString("en-GB") } as Enquiry;
    const pdfBytes = await generateEnquiryPdf(enquiry);
    const pdfStoragePath = `${enquiryNumber}/${enquiryNumber}.pdf`;
    const supabase = createAdminClient();
    const { error: uploadError } = await supabase.storage.from("generated-forms").upload(pdfStoragePath, Buffer.from(pdfBytes), { contentType: "application/pdf", upsert: false });
    if (uploadError) throw uploadError;
    const legacyValues = Object.fromEntries(legacyKeys.map(key => [key, answerValues[key] ?? '']));
    const { error: insertError } = await supabase.from("enquiries").insert({ ...legacyValues, answers: answerValues, date: enquiry.date, enquiry_number: enquiryNumber, client_ip: clientIp, terms_accepted: true, terms_accepted_at: now.toISOString(), terms_version: TERMS_VERSION, privacy_version: PRIVACY_VERSION, submitted_at: now.toISOString(), pdf_storage_path: pdfStoragePath, status: "submitted" });
    if (insertError) { await supabase.storage.from("generated-forms").remove([pdfStoragePath]); throw insertError; }
    
    // Trigger Google Sheets sync asynchronously (non-blocking)
    const enquiryForSync = { ...legacyValues, answers: answerValues, enquiry_number: enquiryNumber, date: enquiry.date, client_ip: clientIp, status: "submitted", submitted_at: now.toISOString() } as Record<string, unknown>;
    syncEnquiryToGoogleSheets(enquiryForSync).then(result => {
      if (result.success) {
        console.log(`[SYNC SUCCESS] Enquiry ${enquiryNumber} synced to Google Sheets (Row: ${result.rowId})`);
        // Update the sync status in the database
        supabase.from("enquiries").update({
          google_sheet_synced: true,
          google_sheet_synced_at: new Date().toISOString(),
          google_sheet_row_id: result.rowId || null,
        }).eq("enquiry_number", enquiryNumber).then(({ error }) => {
          if (error) console.error(`[SYNC UPDATE ERROR] Failed to update sync status for ${enquiryNumber}:`, error);
        });
      } else {
        console.error(`[SYNC ERROR] Failed to sync ${enquiryNumber}:`, result.error);
        // Update error status in the database
        supabase.from("enquiries").update({
          google_sheet_synced: false,
          google_sheet_error: result.error || "Unknown error",
        }).eq("enquiry_number", enquiryNumber).then(({ error }) => {
          if (error) console.error(`[SYNC UPDATE ERROR] Failed to update error status for ${enquiryNumber}:`, error);
        });
      }
    }).catch(error => {
      console.error(`[SYNC EXCEPTION] Exception during sync of ${enquiryNumber}:`, error);
    });
    
    return NextResponse.json({ ok: true, message: "Form submitted successfully.", clientIp, enquiryNumber });
  } catch (error) {
    console.error("ENQUIRY SUBMISSION ERROR:", error);
    return jsonError(error instanceof Error ? error.message : "Unable to submit enquiry.");
  }
}
