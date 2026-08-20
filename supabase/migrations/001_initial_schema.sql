create extension if not exists pgcrypto;

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  enquiry_number text unique not null,
  date text not null,
  course text not null,
  name text not null,
  dob text not null,
  gender text not null default '',
  "motherName" text not null,
  "fatherName" text not null,
  address text not null,
  mobile1 text not null,
  mobile2 text not null default '',
  email text not null default '',
  "class10Percent" text not null,
  "class12Stream" text not null default '',
  "class12Percent" text not null,
  "physicsMarks" text not null default '',
  "chemistryMarks" text not null default '',
  "mathsMarks" text not null default '',
  "biologyMarks" text not null default '',
  "csMarks" text not null default '',
  "schoolNameWithState" text not null default '',
  "neetUgScore" text not null default '',
  "neetPgScore" text not null default '',
  category text not null default '',
  "cuetScoreRank" text not null default '',
  "cetScoreRank" text not null default '',
  "clatScoreRank" text not null default '',
  "catScoreRank" text not null default '',
  "jeeMainsCrl" text not null default '',
  percentile text not null default '',
  "pcmPercent" text not null default '',
  "pcbPercent" text not null default '',
  "collegeUniversityName" text not null default '',
  courses text not null default '',
  marks text not null default '',
  reference text not null default '',
  "signatureDataUrl" text not null default '',
  submitted_at timestamptz not null default now(),
  client_ip text not null default 'Unavailable',
  pdf_storage_path text not null,
  status text not null default 'submitted',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.enquiries add column if not exists client_ip text not null default 'Unavailable';

create index if not exists enquiries_enquiry_number_idx on public.enquiries (enquiry_number);
create index if not exists enquiries_name_idx on public.enquiries (name);
create index if not exists enquiries_mobile1_idx on public.enquiries (mobile1);
create index if not exists enquiries_email_idx on public.enquiries (email);
create index if not exists enquiries_created_at_idx on public.enquiries (created_at desc);

create table if not exists public.admins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  email text not null,
  role text not null default 'admin',
  created_at timestamptz not null default now()
);

create sequence if not exists public.enquiry_number_seq;
create or replace function public.next_enquiry_number()
returns text language plpgsql security definer set search_path = public
as $$
declare
  next_number bigint;
begin
  next_number := nextval('public.enquiry_number_seq');
  return 'ENQ-' || to_char(current_date, 'YYMMDD') || '-' || lpad(next_number::text, 4, '0');
end;
$$;
revoke execute on function public.next_enquiry_number() from public, anon, authenticated;
grant execute on function public.next_enquiry_number() to service_role;

alter table public.enquiries enable row level security;
alter table public.admins enable row level security;

create policy "Admins can read enquiries" on public.enquiries for select to authenticated
using (exists (select 1 from public.admins where user_id = auth.uid() and role = 'admin'));
create policy "Admins can update enquiries" on public.enquiries for update to authenticated
using (exists (select 1 from public.admins where user_id = auth.uid() and role = 'admin'));
create policy "Admins can read their admin record" on public.admins for select to authenticated
using (user_id = auth.uid());

insert into storage.buckets (id, name, public)
values ('generated-forms', 'generated-forms', false)
on conflict (id) do update set public = false;

create policy "Admins can read generated forms" on storage.objects for select to authenticated
using (
  bucket_id = 'generated-forms' and
  exists (select 1 from public.admins where user_id = auth.uid() and role = 'admin')
);
