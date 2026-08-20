import { NextResponse } from 'next/server';
import { getAdminContext } from '@/lib/auth/admin';

export async function GET(request: Request) {
	const context = await getAdminContext();
	if (!context) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	const requestUrl = new URL(request.url);
	const search = requestUrl.searchParams.get('search')?.trim().replace(/[%(),]/g, '') ?? '';
	const start = new Date(); start.setHours(0, 0, 0, 0);
	const hourAgo = new Date(Date.now() - 60 * 60 * 1000);
	const applySearch = <T extends { or: (filters: string) => T }>(query: T) => search
		? query.or(`enquiry_number.ilike.%${search}%,name.ilike.%${search}%,mobile1.ilike.%${search}%,email.ilike.%${search}%,course.ilike.%${search}%`)
		: query;
	const { count: total, error: totalError } = await applySearch(context.supabase.from('enquiries').select('id', { count: 'exact', head: true }));
	const { count: today, error: todayError } = await applySearch(context.supabase.from('enquiries').select('id', { count: 'exact', head: true }).gte('created_at', start.toISOString()));
	const { count: pastHour, error: hourError } = await applySearch(context.supabase.from('enquiries').select('id', { count: 'exact', head: true }).gte('created_at', hourAgo.toISOString()));
	const { data: recent, error: recentError } = await applySearch(context.supabase.from('enquiries').select('id, enquiry_number, name, course, created_at, status')).order('created_at', { ascending: false }).limit(5);
	if (totalError || todayError || hourError || recentError) return NextResponse.json({ error: 'Unable to load dashboard.' }, { status: 500 });
	return NextResponse.json({ total: total ?? 0, today: today ?? 0, pastHour: pastHour ?? 0, recent: recent ?? [] });
}
