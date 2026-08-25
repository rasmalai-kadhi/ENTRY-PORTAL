create table if not exists public.form_questions (
  id uuid primary key default gen_random_uuid(),
  field_key text not null unique check (field_key ~ '^[A-Za-z][A-Za-z0-9_]*$'),
  label text not null,
  type text not null check (type in ('text', 'number', 'email', 'date', 'textarea', 'select', 'phone')),
  number_format text not null default 'integer' check (number_format in ('integer', 'decimal')),
  required boolean not null default false,
  allow_alphabets boolean not null default true,
  allow_numbers boolean not null default true,
  allow_special_characters boolean not null default true,
  max_length integer not null default 255 check (max_length > 0),
  options jsonb not null default '[]'::jsonb,
  display_order integer not null default 0,
  active boolean not null default true,
  placeholder text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists form_questions_display_order_idx on public.form_questions (display_order);
alter table public.form_questions enable row level security;
create policy "Anyone can read active form questions" on public.form_questions
  for select to anon, authenticated using (active = true);
create policy "Admins can manage form questions" on public.form_questions
  for all to authenticated
  using (exists (select 1 from public.admins where user_id = auth.uid() and role = 'admin'))
  with check (exists (select 1 from public.admins where user_id = auth.uid() and role = 'admin'));

alter table public.enquiries add column if not exists answers jsonb not null default '{}'::jsonb;

insert into public.form_questions
  (field_key, label, type, required, allow_alphabets, allow_numbers, allow_special_characters, max_length, display_order, placeholder)
values
  ('course', 'Which course are you interested in?', 'text', true, true, true, true, 255, 10, 'e.g. MBBS, BDS, B.Tech'),
  ('name', 'What is your full name?', 'text', true, true, false, true, 255, 20, 'e.g. Ananya Sharma'),
  ('dob', 'What is your date of birth?', 'date', true, true, true, true, 10, 30, 'Select your date of birth'),
  ('gender', 'How should we record your gender?', 'select', false, true, false, false, 20, 40, 'Select gender'),
  ('motherName', 'What is your mother''s name?', 'text', true, true, false, true, 255, 50, 'e.g. Sunita Sharma'),
  ('fatherName', 'What is your father''s name?', 'text', true, true, false, true, 255, 60, 'e.g. Rajesh Sharma'),
  ('address', 'What is your current address?', 'textarea', true, true, true, true, 1000, 70, 'House / street, city, state, PIN code'),
  ('mobile1', 'What is your primary mobile number?', 'phone', true, false, true, false, 10, 80, 'e.g. 9876543210'),
  ('mobile2', 'What is an alternate mobile number?', 'phone', false, false, true, false, 10, 90, 'e.g. 9876543210'),
  ('email', 'What is your email address?', 'email', false, true, true, true, 255, 100, 'e.g. name@example.com'),
  ('class10Percent', 'What was your Class 10 percentage?', 'number', true, false, true, true, 6, 110, 'e.g. 92.5%'),
  ('class12Stream', 'Which stream did you take in Class 12?', 'text', false, true, true, true, 255, 120, 'e.g. PCB, PCM, Commerce'),
  ('class12Percent', 'What was your aggregate Class 12 percentage?', 'number', true, false, true, true, 6, 130, 'e.g. 88.4%'),
  ('reference', 'How did you hear about us?', 'text', false, true, true, true, 255, 140, 'e.g. Google, Instagram, Friend')
on conflict (field_key) do nothing;

update public.form_questions set options = '["M", "F", "Other"]'::jsonb where field_key = 'gender' and options = '[]'::jsonb;

insert into public.form_questions (field_key, label, type, max_length, display_order, placeholder)
values
  ('physicsMarks', 'What are your Physics marks?', 'text', 255, 150, 'e.g. 88'),
  ('chemistryMarks', 'What are your Chemistry marks?', 'text', 255, 160, 'e.g. 91'),
  ('mathsMarks', 'What are your Mathematics marks?', 'text', 255, 170, 'e.g. 85'),
  ('biologyMarks', 'What are your Biology marks?', 'text', 255, 180, 'e.g. 94'),
  ('csMarks', 'What are your Computer Science marks?', 'text', 255, 190, 'e.g. 90'),
  ('schoolNameWithState', 'What is your school name and state?', 'text', 255, 200, 'e.g. Delhi Public School, Delhi'),
  ('neetUgScore', 'What is your NEET UG score?', 'text', 255, 210, 'e.g. 650 or AIR 12000'),
  ('neetPgScore', 'What is your NEET PG score?', 'text', 255, 220, 'e.g. 540 or AIR 8000'),
  ('category', 'What is your category?', 'text', 255, 230, 'e.g. General, OBC, SC, ST'),
  ('cuetScoreRank', 'What is your CUET score or rank?', 'text', 255, 240, 'e.g. 780 or Rank 1200'),
  ('cetScoreRank', 'What is your UG / PG CET score or rank?', 'text', 255, 250, 'e.g. 96 percentile'),
  ('clatScoreRank', 'What is your CLAT score or rank?', 'text', 255, 260, 'e.g. 82 or Rank 450'),
  ('catScoreRank', 'What is your CAT score or percentile?', 'text', 255, 270, 'e.g. 98.2 percentile'),
  ('jeeMainsCrl', 'What is your JEE Mains CRL?', 'text', 255, 280, 'e.g. 12500'),
  ('percentile', 'What is your overall percentile?', 'text', 255, 290, 'e.g. 97.4 percentile'),
  ('pcmPercent', 'What is your PCM percentage?', 'text', 255, 300, 'e.g. 86.7%'),
  ('pcbPercent', 'What is your PCB percentage?', 'text', 255, 310, 'e.g. 89.2%'),
  ('collegeUniversityName', 'What is your college or university name?', 'text', 255, 320, 'e.g. Delhi University'),
  ('courses', 'Which other courses interest you?', 'textarea', 1000, 330, 'e.g. BDS, BAMS, Biotechnology'),
  ('marks', 'Is there any other marks information to share?', 'textarea', 1000, 340, 'e.g. Graduation: 72%')
on conflict (field_key) do nothing;