alter table public.enquiries add column if not exists terms_accepted boolean not null default false;
alter table public.enquiries add column if not exists terms_accepted_at timestamptz;
alter table public.enquiries add column if not exists terms_version text not null default '2026-08-23';
alter table public.enquiries add column if not exists privacy_version text not null default '2026-08-23';
alter table public.enquiries add column if not exists client_ip text not null default 'Unavailable';