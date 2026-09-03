import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { syncEnquiryToGoogleSheets } from "@/lib/pdf/google-sheets-sync";

export const runtime = "nodejs";

function jsonError(message: string, status = 500) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = createAdminClient();

    // Fetch the enquiry from the database
    const { data: enquiry, error: fetchError } = await supabase
      .from("enquiries")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchError || !enquiry) {
      return jsonError("Enquiry not found.", 404);
    }

    // Sync to Google Sheets
    const syncResult = await syncEnquiryToGoogleSheets(enquiry as Record<string, unknown>);

    // Update the sync status in the database
    const now = new Date().toISOString();
    const updateData = syncResult.success
      ? {
          google_sheet_synced: true,
          google_sheet_synced_at: now,
          google_sheet_error: null,
          google_sheet_row_id: syncResult.rowId || null,
        }
      : {
          google_sheet_synced: false,
          google_sheet_error: syncResult.error || "Unknown error",
        };

    const { error: updateError } = await supabase
      .from("enquiries")
      .update(updateData)
      .eq("id", id);

    if (updateError) {
      console.error("Error updating sync status:", updateError);
    }

    if (!syncResult.success) {
      return NextResponse.json(
        {
          ok: false,
          error: syncResult.error || "Failed to sync to Google Sheets",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Successfully synced to Google Sheets",
      rowId: syncResult.rowId,
    });
  } catch (error) {
    console.error("SYNC ERROR:", error);
    return jsonError(
      error instanceof Error ? error.message : "Unable to sync enquiry."
    );
  }
}
