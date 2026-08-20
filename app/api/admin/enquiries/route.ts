import { NextResponse } from 'next/server';
import { getAdminContext } from '@/lib/auth/admin';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const context = await getAdminContext();
  if (!context) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const url = new URL(request.url);
  const search = url.searchParams.get('search')?.trim().replace(/[%(),]/g, '') ?? '';
  const status = url.searchParams.get('status') ?? '';
  const page = Math.max(Number(url.searchParams.get('page') ?? 1), 1);
  const pageSize = Math.min(Math.max(Number(url.searchParams.get('pageSize') ?? 20), 1), 100);
  const sort = url.searchParams.get('sort') === 'name' ? 'name' : 'created_at';
  const ascending = url.searchParams.get('direction') === 'asc';
  const from = (page - 1) * pageSize;

  let query = context.supabase.from('enquiries').select('*', { count: 'exact' });
  if (search) query = query.or(`enquiry_number.ilike.%${search}%,name.ilike.%${search}%,mobile1.ilike.%${search}%`);
  if (status) query = query.eq('status', status);

  const { data, count, error } = await query.order(sort, { ascending }).range(from, from + pageSize - 1);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data, total: count ?? 0, page, pageSize });
}
