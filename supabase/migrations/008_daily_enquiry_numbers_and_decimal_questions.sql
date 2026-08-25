create table if not exists public.enquiry_number_counters (
  enquiry_date date primary key,
  last_number integer not null default 0 check (last_number >= 0)
);

drop function if exists public.next_enquiry_number();

create or replace function public.next_enquiry_number(p_enquiry_date date)
returns text language plpgsql security definer set search_path = public
as $$
declare
  next_number integer;
begin
  insert into public.enquiry_number_counters (enquiry_date, last_number)
  values (p_enquiry_date, 1)
  on conflict (enquiry_date) do update
    set last_number = public.enquiry_number_counters.last_number + 1
  returning last_number into next_number;

  return to_char(p_enquiry_date, 'DD/MM/YY') || '-' || lpad(next_number::text, 2, '0');
end;
$$;

revoke execute on function public.next_enquiry_number(date) from public, anon, authenticated;
grant execute on function public.next_enquiry_number(date) to service_role;
notify pgrst, 'reload schema';

alter table public.form_questions add column if not exists number_format text not null default 'integer';
alter table public.form_questions drop constraint if exists form_questions_number_format_check;
alter table public.form_questions add constraint form_questions_number_format_check check (number_format in ('integer', 'decimal'));

update public.form_questions
set number_format = 'decimal'
where type = 'number' and field_key ilike '%percent%';