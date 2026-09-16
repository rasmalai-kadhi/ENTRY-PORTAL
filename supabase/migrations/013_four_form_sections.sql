update public.form_questions
set section = case
  when field_key in ('course', 'name', 'dob', 'gender', 'motherName', 'fatherName', 'address', 'mobile1', 'mobile2', 'email') then 'Basic Details'
  when field_key in ('class10Percent', 'class12Stream', 'class12Percent', 'physicsMarks', 'chemistryMarks', 'mathsMarks', 'biologyMarks', 'csMarks', 'schoolNameWithState', 'pcmPercent', 'pcbPercent', 'collegeUniversityName', 'courses', 'marks') then 'Educational Details'
  when field_key in ('neetUgScore', 'neetPgScore', 'cuetScoreRank', 'cetScoreRank', 'clatScoreRank', 'catScoreRank', 'jeeMainsCrl', 'percentile', 'category') then 'Entrance Exam Details'
  when section in ('Personal Details', 'Contact Details', 'Basic Details') then 'Basic Details'
  when section in ('Academic Details', 'Course / College Details', 'Educational Details') then 'Educational Details'
  when section in ('Entrance Exams', 'Entrance Exam Details') then 'Entrance Exam Details'
  else 'Other Details'
end,
section_order = case
  when field_key in ('course', 'name', 'dob', 'gender', 'motherName', 'fatherName', 'address', 'mobile1', 'mobile2', 'email') then 1
  when field_key in ('class10Percent', 'class12Stream', 'class12Percent', 'physicsMarks', 'chemistryMarks', 'mathsMarks', 'biologyMarks', 'csMarks', 'schoolNameWithState', 'pcmPercent', 'pcbPercent', 'collegeUniversityName', 'courses', 'marks') then 2
  when field_key in ('neetUgScore', 'neetPgScore', 'cuetScoreRank', 'cetScoreRank', 'clatScoreRank', 'catScoreRank', 'jeeMainsCrl', 'percentile', 'category') then 3
  when section in ('Personal Details', 'Contact Details', 'Basic Details') then 1
  when section in ('Academic Details', 'Course / College Details', 'Educational Details') then 2
  when section in ('Entrance Exams', 'Entrance Exam Details') then 3
  else 4
end;

insert into public.form_questions
  (field_key, label, type, required, allow_alphabets, allow_numbers, allow_special_characters, max_length, display_order, section, section_order, placeholder)
values
  ('description', 'Description', 'textarea', false, true, true, true, 1000, 350, 'Other Details', 4, 'Add any other information you would like us to know')
on conflict (field_key) do nothing;