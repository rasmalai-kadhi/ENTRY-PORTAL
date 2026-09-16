alter table public.form_sections drop constraint if exists form_sections_title_key;

drop policy if exists "Anyone can read active form sections" on public.form_sections;
drop policy if exists "Admins can manage form sections" on public.form_sections;
create policy "Anyone can read active form sections" on public.form_sections
  for select to anon, authenticated using (active = true);
create policy "Admins can manage form sections" on public.form_sections
  for all to authenticated
  using (exists (select 1 from public.admins where user_id = auth.uid() and role = 'admin'))
  with check (exists (select 1 from public.admins where user_id = auth.uid() and role = 'admin'));

drop policy if exists "Anyone can read active form questions" on public.form_questions;
drop policy if exists "Admins can manage form questions" on public.form_questions;
create policy "Anyone can read active form questions" on public.form_questions
  for select to anon, authenticated using (active = true);
create policy "Admins can manage form questions" on public.form_questions
  for all to authenticated
  using (exists (select 1 from public.admins where user_id = auth.uid() and role = 'admin'))
  with check (exists (select 1 from public.admins where user_id = auth.uid() and role = 'admin'));