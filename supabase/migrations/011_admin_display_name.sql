-- Add display_name column to admins table
alter table public.admins
  add column if not exists display_name text;

-- Create index for efficient lookups
create index if not exists admins_display_name_idx on public.admins (display_name);
