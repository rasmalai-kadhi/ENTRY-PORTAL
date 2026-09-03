-- Add Google Sheets sync tracking columns to enquiries table
alter table public.enquiries 
  add column if not exists google_sheet_synced boolean not null default false,
  add column if not exists google_sheet_synced_at timestamptz,
  add column if not exists google_sheet_error text,
  add column if not exists google_sheet_row_id text;

-- Create index for sync status queries
create index if not exists enquiries_google_sheet_synced_idx on public.enquiries (google_sheet_synced);
create index if not exists enquiries_google_sheet_synced_at_idx on public.enquiries (google_sheet_synced_at desc);
