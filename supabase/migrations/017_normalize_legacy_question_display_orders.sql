-- Keep backfilled questions compatible with the form configuration API.
update public.form_questions
set display_order = 100000 + row_number
from (
  select id, row_number() over (order by field_key)::integer as row_number
  from public.form_questions
  where display_order < 0
) as legacy
where public.form_questions.id = legacy.id;