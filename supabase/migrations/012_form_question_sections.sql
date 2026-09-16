alter table public.form_questions
  add column if not exists section text not null default 'Additional Details',
  add column if not exists section_order integer not null default 99,
  add column if not exists section_description text;

update public.form_questions
set section = case
  when field_key in ('name', 'dob', 'gender', 'motherName', 'fatherName') then 'Personal Details'
  when field_key in ('address', 'mobile1', 'mobile2', 'email') then 'Contact Details'
  when field_key in ('class10Percent', 'class12Stream', 'class12Percent', 'physicsMarks', 'chemistryMarks', 'mathsMarks', 'biologyMarks', 'csMarks', 'schoolNameWithState') then 'Academic Details'
  when field_key in ('neetUgScore', 'neetPgScore', 'cuetScoreRank', 'cetScoreRank', 'clatScoreRank', 'catScoreRank', 'jeeMainsCrl', 'percentile', 'pcmPercent', 'pcbPercent') then 'Entrance Exams'
  when field_key in ('course', 'collegeUniversityName', 'courses') then 'Course / College Details'
  when field_key in ('category', 'reference', 'marks') then 'Reference / Other Details'
  else 'Additional Details'
end,
section_order = case
  when field_key in ('name', 'dob', 'gender', 'motherName', 'fatherName') then 1
  when field_key in ('address', 'mobile1', 'mobile2', 'email') then 2
  when field_key in ('class10Percent', 'class12Stream', 'class12Percent', 'physicsMarks', 'chemistryMarks', 'mathsMarks', 'biologyMarks', 'csMarks', 'schoolNameWithState') then 3
  when field_key in ('neetUgScore', 'neetPgScore', 'cuetScoreRank', 'cetScoreRank', 'clatScoreRank', 'catScoreRank', 'jeeMainsCrl', 'percentile', 'pcmPercent', 'pcbPercent') then 4
  when field_key in ('course', 'collegeUniversityName', 'courses') then 5
  when field_key in ('category', 'reference', 'marks') then 6
  else 99
end;

create index if not exists form_questions_section_order_idx on public.form_questions (section_order, display_order);