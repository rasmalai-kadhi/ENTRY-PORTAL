-- Admin authorization is based on auth.users.id, never on a password stored here.
create table if not exists public.admins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  email text not null,
  role text not null default 'admin',
  created_at timestamptz not null default now()
);

create unique index if not exists admins_user_id_uidx on public.admins (user_id);

-- This intentionally promotes every existing Supabase Auth user. Remove the
-- rows for accounts that should not have admin access after running it.
insert into public.admins (user_id, email)
select id, email
from auth.users
where email is not null
on conflict (user_id) do update set email = excluded.email;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admins
    where user_id = auth.uid() and role = 'admin'
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated, service_role;

alter table public.admins enable row level security;

 drop policy if exists "Admins can read their admin record" on public.admins;
create policy "Admins can read their admin record"
  on public.admins for select to authenticated
  using (user_id = auth.uid());

-- Admin records are provisioned by this migration or the service role, never
-- by a browser client.
drop policy if exists "Admins can read enquiries" on public.enquiries;
create policy "Admins can read enquiries"
  on public.enquiries for select to authenticated
  using (public.is_admin());

drop policy if exists "Admins can update enquiries" on public.enquiries;
create policy "Admins can update enquiries"
  on public.enquiries for update to authenticated
  using (public.is_admin())
  with check (public.is_admin());
