import 'server-only';
import { createClient } from '@supabase/supabase-js';

let connectionChecked = false;

export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error('Supabase server configuration is missing.');
  }

  return createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export async function verifySupabaseConnection() {
  if (connectionChecked) return true;

  const { error } = await createAdminClient()
    .from('enquiries')
    .select('id', { count: 'exact', head: true });

  if (error) {
    console.error('Supabase database connection failed:', error.message);
    return false;
  }

  connectionChecked = true;
  console.log('Supabase database connected.');
  return true;
}
