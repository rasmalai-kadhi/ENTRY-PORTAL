create table if not exists public.form_sections (
  id uuid primary key default gen_random_uuid(),
  title text not null unique check (char_length(trim(title)) between 1 and 100),
  description text not null default '',
  display_order integer not null default 0 check (display_order >= 0),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.form_questions add column if not exists section_id uuid references public.form_sections(id) on delete restrict;
create index if not exists form_sections_order_idx on public.form_sections (display_order);
create index if not exists form_questions_section_order_idx on public.form_questions (section_id, display_order);

alter table public.form_sections enable row level security;
create policy "Anyone can read active form sections" on public.form_sections for select to anon, authenticated using (active = true);
create policy "Admins can manage form sections" on public.form_sections for all to authenticated
  using (exists (select 1 from public.admins where user_id = auth.uid() and role = 'admin'))
  with check (exists (select 1 from public.admins where user_id = auth.uid() and role = 'admin'));

insert into public.form_sections (title, description, display_order)
values ('Basic Details', 'Tell us about yourself and how we can reach you.', 10),
       ('Educational Details', 'Share your academic background and course preferences.', 20),
       ('Entrance Exam Details', 'Add any entrance exam scores or ranks you have.', 30),
       ('Other Details', 'Add any final context and confirm your consent.', 40)
on conflict (title) do nothing;

update public.form_questions q
set section_id = s.id
from public.form_sections s
where q.section_id is null and s.title = case
  when q.field_key in ('course', 'name', 'dob', 'gender', 'motherName', 'fatherName', 'address', 'mobile1', 'mobile2', 'email') then 'Basic Details'
  when q.field_key in ('class10Percent', 'class12Stream', 'class12Percent', 'physicsMarks', 'chemistryMarks', 'mathsMarks', 'biologyMarks', 'csMarks', 'schoolNameWithState', 'pcmPercent', 'pcbPercent', 'collegeUniversityName', 'courses', 'marks') then 'Educational Details'
  when q.field_key in ('neetUgScore', 'neetPgScore', 'cuetScoreRank', 'cetScoreRank', 'clatScoreRank', 'catScoreRank', 'jeeMainsCrl', 'percentile', 'category') then 'Entrance Exam Details'
  else 'Other Details'
end;