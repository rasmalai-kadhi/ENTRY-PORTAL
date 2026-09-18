-- PDF mappings use the question key as their stable identifier.
-- Backfill any legacy mapping keys that predate form_questions. This preserves
-- existing mappings while making form_questions the authoritative key registry.
insert into public.form_questions (field_key, label, type, active, display_order)
select
  mappings.field_key,
  coalesce(nullif(min(mappings.field_label), ''), mappings.field_key),
  'text',
  mappings.field_key not in ('date', 'enquiryNumber', 'signatureDataUrl'),
  100000 + row_number() over (order by mappings.field_key)::integer
from public.pdf_field_mappings as mappings
left join public.form_questions as questions on questions.field_key = mappings.field_key
where questions.field_key is null
group by mappings.field_key
on conflict (field_key) do nothing;

alter table public.pdf_field_mappings
  drop constraint if exists pdf_field_mappings_field_key_fkey;

alter table public.pdf_field_mappings
  add constraint pdf_field_mappings_field_key_fkey
  foreign key (field_key)
  references public.form_questions (field_key)
  on update cascade
  on delete cascade;