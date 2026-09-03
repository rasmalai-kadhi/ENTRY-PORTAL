# Google Sheets Integration Setup Guide

This document explains how to set up and configure the Google Sheets real-time sync feature for the Eduspray Enquiry System.

## Overview

When an enquiry is submitted through the form:
1. The data is saved to Supabase (primary source of truth)
2. A PDF is generated and stored
3. The success response is sent to the client (client flow unchanged)
4. In the background, the enquiry is synced to Google Sheets

Admins can manually sync individual enquiries using the **"Sync to Google Sheets"** button in the enquiry detail view.

**Important**: Google Sheets sync is admin-only. Clients never see Google Sheets status, errors, or any related messaging.

## Prerequisites

- A Google Cloud project
- A Google Service Account with Sheets API access
- A Google Sheets spreadsheet to receive the enquiry data
- Server-side access to the credentials (never exposed to clients)

## Setup Steps

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click **"Select a Project"** at the top
3. Click **"New Project"**
4. Enter a project name (e.g., "Eduspray Enquiry System")
5. Click **Create**

### 2. Enable the Google Sheets API

1. In the Google Cloud Console, go to **APIs & Services > Library**
2. Search for **"Google Sheets API"**
3. Click on it and select **Enable**

### 3. Create a Service Account

1. Go to **APIs & Services > Credentials**
2. Click **Create Credentials** and select **Service Account**
3. Fill in the service account details:
   - **Service account name**: `eduspray-enquiry-sync`
   - **Service account ID**: Auto-generated
   - **Description**: "Syncs enquiry data to Google Sheets"
4. Click **Create and Continue**
5. Grant the service account the **Editor** role (for the test project; use a more restricted role in production)
6. Click **Continue**
7. Click **Done**

### 4. Generate a Service Account Key

1. Go to **APIs & Services > Service Accounts**
2. Click on the service account you just created
3. Go to the **Keys** tab
4. Click **Add Key > Create new key**
5. Select **JSON** format
6. Click **Create**
7. A JSON file will download automatically

The downloaded JSON file contains:
```json
{
  "type": "service_account",
  "project_id": "...",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "...",
  "client_id": "...",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token"
}
```

### 5. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Click **+ New** to create a new spreadsheet
3. Name it (e.g., "Enquiry Data")
4. Copy the Spreadsheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit
   ```

### 6. Share the Sheet with the Service Account

1. In your Google Sheet, click **Share**
2. Enter the `client_email` from the JSON key file (e.g., `eduspray-enquiry-sync@...iam.gserviceaccount.com`)
3. Give **Editor** access
4. Uncheck "Notify people" (it's a bot account)
5. Click **Share**

### 7. Configure Environment Variables

Create or update your `.env.local` file with:

```env
GOOGLE_SHEETS_SPREADSHEET_ID=YOUR_SPREADSHEET_ID
GOOGLE_SHEETS_NAME=Enquiries
GOOGLE_PRIVATE_KEY_ID=YOUR_PRIVATE_KEY_ID
GOOGLE_PRIVATE_KEY=YOUR_PRIVATE_KEY_CONTENT
GOOGLE_CLIENT_EMAIL=YOUR_CLIENT_EMAIL
GOOGLE_CLIENT_ID=YOUR_CLIENT_ID
```

From the downloaded JSON key file:
- `GOOGLE_PRIVATE_KEY_ID` → `private_key_id`
- `GOOGLE_PRIVATE_KEY` → `private_key` (with literal `\n` characters preserved)
- `GOOGLE_CLIENT_EMAIL` → `client_email`
- `GOOGLE_CLIENT_ID` → `client_id`
- `GOOGLE_SHEETS_SPREADSHEET_ID` → Spreadsheet ID from step 5

**Important for `GOOGLE_PRIVATE_KEY`**: When copying the private key, ensure newlines are represented as literal `\n` characters. In most `.env` files, you can paste the entire multi-line key directly, and it will work.

### 8. Install the Google API Library

The project already includes `googleapis` in `package.json`:

```bash
npm install
```

If needed, manually add it:

```bash
npm install googleapis
```

### 9. Apply the Database Migration

Run the Supabase migration to add Google Sheets sync tracking columns:

```bash
# In Supabase Dashboard SQL Editor, run:
supabase/migrations/010_google_sheets_sync.sql
```

This adds:
- `google_sheet_synced` (boolean)
- `google_sheet_synced_at` (timestamp)
- `google_sheet_error` (text)
- `google_sheet_row_id` (text)

### 10. Test the Integration

1. Start the development server: `npm run dev`
2. Submit a test enquiry through the form
3. Check the Google Sheet — a new row should appear automatically
4. Log in to the admin panel
5. View the submitted enquiry
6. Click **"Sync to Google Sheets"** to manually sync (or verify the automatic sync already happened)
7. Confirm the sync status message appears and the sheet updates

## Admin Features

### Automatic Sync (On Submission)
- Every enquiry submitted via the form automatically syncs to Google Sheets
- Sync happens after successful Supabase insertion
- Client never knows about sync status
- Failures are logged server-side and recorded in the database

### Manual Sync Button
- Located in the enquiry detail view (top right)
- Admins can manually retry sync for failed records
- Button shows loading state while syncing
- Success/error toast appears after completion
- Existing rows are updated (no duplicates created)

### Sync Status Indicators
- Green checkmark + timestamp shown if successfully synced
- Error message displayed below the detail view if sync failed

## Troubleshooting

### "Google Sheets spreadsheet ID not configured"
- Ensure `GOOGLE_SHEETS_SPREADSHEET_ID` is set in `.env.local`
- Restart the development server after changing env vars

### "Missing Google Sheets credentials"
- Ensure all required env vars are set: `GOOGLE_PRIVATE_KEY`, `GOOGLE_CLIENT_EMAIL`, `GOOGLE_PRIVATE_KEY_ID`
- Verify the private key contains literal `\n` characters
- Check that the service account JSON file was downloaded correctly

### "Permission denied" or "Insufficient permissions"
- Ensure the Google Sheet is shared with the service account email (`client_email`)
- Verify the service account has **Editor** access
- Check that the Sheets API is enabled in Google Cloud Console

### No data appears in the sheet
- Check the sync status in the admin panel
- Check server logs for sync errors
- Verify the sheet name matches `GOOGLE_SHEETS_NAME` env var (default: "Enquiries")
- Ensure the first row is reserved for headers

### Duplicate rows are appearing
- Do not manually submit the same enquiry twice
- The system uses enquiry number as the unique identifier
- If a sync is retried, existing rows are updated (not duplicated)

## Disabling Google Sheets Sync

To disable Google Sheets sync without breaking the application:

1. Leave `GOOGLE_SHEETS_SPREADSHEET_ID` empty or unset
2. The system will gracefully skip syncing and log a message
3. The admin panel will still show the sync button, but it will fail gracefully with a helpful message

## Production Considerations

1. **Use a restricted service account role** — In production, create a custom role with only `sheets.spreadsheets.values.*` permissions
2. **Secure env vars** — Use your deployment platform's secrets manager (Vercel, Railway, Render, etc.)
3. **Sheet permissions** — Only grant the service account access to the specific sheet it needs
4. **Monitoring** — Check server logs regularly for sync errors
5. **Backup** — Maintain a backup of the Google Sheet separate from the Supabase database
6. **Audit** — Consider using Google Sheets' revision history for audit trails

## API Reference

### `syncEnquiryToGoogleSheets(enquiry)`

**Location**: `lib/pdf/google-sheets-sync.ts`

**Parameters**:
- `enquiry`: Record containing enquiry data (required fields: `enquiry_number`)

**Returns**: 
```typescript
{
  success: boolean;
  rowId?: string;      // Row number in the sheet
  error?: string;      // Error message if failed
}
```

**Usage**:
```typescript
const result = await syncEnquiryToGoogleSheets({
  enquiry_number: "ENQ-260901-0001",
  course: "Engineering",
  name: "John Doe",
  // ... other fields
});

if (result.success) {
  console.log(`Synced to row ${result.rowId}`);
} else {
  console.error(`Sync failed: ${result.error}`);
}
```

## Files Modified/Created

### New/Modified Files:
- `.env.example` — Added Google Sheets env vars
- `supabase/migrations/010_google_sheets_sync.sql` — Added sync tracking columns
- `lib/pdf/google-sheets-sync.ts` — Google Sheets API integration logic
- `app/api/admin/enquiries/[id]/sync-google-sheets/route.ts` — Manual sync endpoint
- `components/admin/EnquiryDetail.tsx` — Added manual sync button
- `app/globals.css` — Styles for sync button and status messages

### Modified Flow:
- `app/api/enquiries/route.ts` — Now triggers background Google Sheets sync after submission
- `package.json` — Added `googleapis` dependency

## Architecture

```
Client Form Submission
          ↓
POST /api/enquiries
          ↓
Validate & Generate PDF
          ↓
Insert into Supabase (PRIMARY)
          ↓
Return Success to Client ← Client flow ends here
          ↓
[Background, Async]
Sync to Google Sheets
          ↓
Update Supabase sync status
```

The key design:
- Client flow is **unchanged and unblocked**
- Google Sheets sync is **non-blocking** and happens asynchronously
- Sync failures are **logged and recorded** but don't affect the client
- Admins can **manually retry** via the sync button
