alter table public.enquiries
  add column if not exists client_ip text not null default 'Unavailable';

create index if not exists enquiries_client_ip_idx
  on public.enquiries (client_ip);
