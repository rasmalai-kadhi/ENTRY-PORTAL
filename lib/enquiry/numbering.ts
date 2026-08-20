import { createAdminClient } from '@/lib/supabase/admin';

export async function generateEnquiryNumber(): Promise<string> {
  const { data, error } = await createAdminClient().rpc('next_enquiry_number');
  if (error || !data) throw error ?? new Error('Unable to generate enquiry number.');
  return data as string;
}
