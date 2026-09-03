import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function getAdminContext() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: admin } = await createAdminClient()
    .from('admins')
    .select('id, user_id, email, role, display_name')
    .eq('user_id', user.id)
    .eq('role', 'admin')
    .maybeSingle();

  return admin ? { user, admin, supabase: createAdminClient() } : null;
}
