import { createAdminClient } from '@/lib/supabase/admin';

function applicationDate() {
  const timezone = process.env.APP_TIMEZONE || 'Asia/Kolkata';
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

export async function generateEnquiryNumber(): Promise<string> {
  const { data, error } = await createAdminClient().rpc('next_enquiry_number', { p_enquiry_date: applicationDate() });
  if (error || !data) throw error ?? new Error('Unable to generate enquiry number.');
  return data as string;
}
