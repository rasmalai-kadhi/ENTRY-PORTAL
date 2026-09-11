import { createClient } from '@supabase/supabase-js';

const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;
if (!email || !password) throw new Error('Set ADMIN_EMAIL and ADMIN_PASSWORD before running this script.');

async function main() {
	const url = process.env.SUPABASE_URL;
	const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
	if (!url || !serviceRoleKey) throw new Error('Supabase server configuration is missing.');
	const supabase = createClient(url, serviceRoleKey, {
		auth: { autoRefreshToken: false, persistSession: false },
	});
	const { data, error } = await supabase.auth.admin.createUser({ email, password, email_confirm: true });
	if (error) throw error;
	const { error: adminError } = await supabase.from('admins').insert({ user_id: data.user.id, email, role: 'admin' });
	if (adminError) throw adminError;
	console.log(`Created admin ${email}`);
}

void main();
