create table if not exists public.site_settings (
  id text primary key default 'global' check (id = 'global'),
  maintenance_enabled boolean not null default false,
  maintenance_message text not null default '',
  maintenance_start timestamptz,
  maintenance_end timestamptz,
  password_protection_enabled boolean not null default true,
  maintenance_password_hash text not null default '',
  updated_at timestamptz not null default now(),
  constraint site_settings_maintenance_window_check check (maintenance_end is null or maintenance_start is null or maintenance_end > maintenance_start)
);

alter table public.site_settings enable row level security;

drop policy if exists "Admins can manage site settings" on public.site_settings;
create policy "Admins can manage site settings" on public.site_settings
  for all to authenticated
  using (exists (select 1 from public.admins where user_id = auth.uid() and role = 'admin'))
  with check (exists (select 1 from public.admins where user_id = auth.uid() and role = 'admin'));

insert into public.site_settings (id)
values ('global')
on conflict (id) do nothing;