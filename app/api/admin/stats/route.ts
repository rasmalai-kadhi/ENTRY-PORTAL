import { NextResponse } from 'next/server';
import { getAdminContext } from '@/lib/auth/admin';

export async function GET() {
	const context = await getAdminContext();
	if (!context) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	const start = new Date(); start.setHours(0, 0, 0, 0);
	const { count: total, error: totalError } = await context.supabase.from('enquiries').select('id', { count: 'exact', head: true });
	const { count: today, error: todayError } = await context.supabase.from('enquiries').select('id', { count: 'exact', head: true }).gte('created_at', start.toISOString());
	const { data: recent, error: recentError } = await context.supabase.from('enquiries').select('id, enquiry_number, name, course, created_at, status').order('created_at', { ascending: false }).limit(5);
	if (totalError || todayError || recentError) return NextResponse.json({ error: 'Unable to load dashboard.' }, { status: 500 });
	return NextResponse.json({ total: total ?? 0, today: today ?? 0, recent: recent ?? [] });
}
