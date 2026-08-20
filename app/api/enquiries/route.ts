import { NextResponse } from "next/server";
import { enquirySchema } from "@/schemas/enquiry.schema";
import { stampEnquiryPdf } from "@/lib/pdf/stamp";
import { generateEnquiryNumber } from "@/lib/enquiry/numbering";
import {
  createAdminClient,
  verifySupabaseConnection,
} from "@/lib/supabase/admin";
import type { Enquiry } from "@/types/enquiry";
import { headers } from "next/headers";
import { getClientIp } from "@/lib/request/client-ip";

export const runtime = "nodejs";

function jsonError(message: string, status = 500) {
  return NextResponse.json(
    {
      ok: false,
      error: message,
    },
    { status }
  );
}

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(await headers());
    if (!await verifySupabaseConnection()) {
      return jsonError("Database connection unavailable.", 503);
    }

    // ---------------------------------------------------------
    // 1. Read JSON body
    // ---------------------------------------------------------
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return jsonError("Invalid request body.", 400);
    }

    // ---------------------------------------------------------
    // 2. Validate
    // ---------------------------------------------------------
    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please check the form fields.",
          fields: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const now = new Date();
    const enquiryNumber = await generateEnquiryNumber();

    // ---------------------------------------------------------
    // 4. Prepare record for PDF
    // ---------------------------------------------------------
    const enquiry: Enquiry = {
      ...parsed.data,
      enquiryNumber,
      date: now.toLocaleDateString("en-GB"),
    };

    // ---------------------------------------------------------
    // 5. Stamp submitted data onto original PDF
    // ---------------------------------------------------------
    const pdfBytes = await stampEnquiryPdf(enquiry);

    const pdfStoragePath = `${enquiryNumber}/${enquiryNumber}.pdf`;
    const supabase = createAdminClient();
    const { error: uploadError } = await supabase.storage
      .from("generated-forms")
      .upload(pdfStoragePath, Buffer.from(pdfBytes), {
        contentType: "application/pdf",
        upsert: false,
      });

    if (uploadError) throw uploadError;

    const { error: insertError } = await supabase.from("enquiries").insert({
      ...parsed.data,
      date: enquiry.date,
      enquiry_number: enquiryNumber,
      client_ip: clientIp,
      submitted_at: now.toISOString(),
      pdf_storage_path: pdfStoragePath,
      status: "submitted",
    });

    if (insertError) {
      await supabase.storage.from("generated-forms").remove([pdfStoragePath]);
      throw insertError;
    }

    // ---------------------------------------------------------
    // 7. Return JSON
    // ---------------------------------------------------------
    return NextResponse.json({
      ok: true,
      message: "Form submitted successfully.",
    });
  } catch (error) {
    console.error("ENQUIRY SUBMISSION ERROR:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Unable to submit enquiry.";

    return jsonError(message, 500);
  }
}