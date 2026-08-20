create or replace function public.next_enquiry_number()
returns text language plpgsql security definer set search_path = public
as $$
declare
  next_number bigint;
  number_prefix text := 'ENQ-' || to_char(current_date, 'YYMMDD') || '-';
begin
  perform pg_advisory_xact_lock(hashtext('eduspray-enquiry-number'));

  select candidate
    into next_number
    from generate_series(1, (
      select coalesce(max((right(enquiry_number, 4))::bigint), 0) + 1
      from public.enquiries
      where enquiry_number like number_prefix || '%'
    )) as candidate
   where not exists (
     select 1
       from public.enquiries
      where enquiry_number = number_prefix || lpad(candidate::text, 4, '0')
   )
   order by candidate
   limit 1;

  return number_prefix || lpad(next_number::text, 4, '0');
end;
$$;

revoke execute on function public.next_enquiry_number() from public, anon, authenticated;
grant execute on function public.next_enquiry_number() to service_role;