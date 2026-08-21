create table if not exists public.pdf_field_mappings (
  id uuid primary key default gen_random_uuid(),
  template_id text not null,
  field_key text not null,
  field_label text not null,
  page_number integer not null check (page_number > 0),
  x numeric not null check (x >= 0),
  y numeric not null check (y >= 0),
  width numeric not null check (width > 0),
  height numeric not null check (height > 0),
  font_size numeric not null default 10 check (font_size > 0),
  font_family text not null default 'Helvetica',
  alignment text not null default 'left' check (alignment in ('left', 'center', 'right')),
  color text not null default '#000000',
  multiline boolean not null default false,
  rotation numeric not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (template_id, field_key)
);

create index if not exists pdf_field_mappings_template_idx on public.pdf_field_mappings (template_id, page_number);
alter table public.pdf_field_mappings enable row level security;
create policy "Admins can manage PDF field mappings" on public.pdf_field_mappings
  for all to authenticated
  using (exists (select 1 from public.admins where user_id = auth.uid() and role = 'admin'))
  with check (exists (select 1 from public.admins where user_id = auth.uid() and role = 'admin'));