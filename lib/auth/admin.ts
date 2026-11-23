import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { headers } from 'next/headers';
import type { User } from '@supabase/supabase-js';

export async function getAdminContext(customToken?: string) {
  const adminClient = createAdminClient();
  let user: User | null = null;

  // 1. Check for Bearer auth token in request headers or customToken parameter
  let token = customToken;
  if (!token) {
    try {
      const headerList = await headers();
      const authHeader = headerList.get('authorization');
      if (authHeader && authHeader.toLowerCase().startsWith('bearer ')) {
        token = authHeader.slice(7).trim();
      }
    } catch {
      // headers() may not be available in non-request contexts
    }
  }

  if (token) {
    const { data, error } = await adminClient.auth.getUser(token);
    if (!error && data.user) {
      user = data.user;
    }
  }

  // 2. Fall back to cookie-based session
  if (!user) {
    try {
      const supabase = await createClient();
      const { data } = await supabase.auth.getUser();
      user = data.user;
    } catch {
      // Ignore cookie extraction errors
    }
  }

  if (!user) return null;

  const { data: admin } = await adminClient
    .from('admins')
    .select('id, user_id, email, role, display_name')
    .eq('user_id', user.id)
    .eq('role', 'admin')
    .maybeSingle();

  return admin ? { user, admin, supabase: adminClient } : null;
}
