import { NextResponse } from 'next/server';
import { getAdminContext } from '@/lib/auth/admin';
import { applicationMidnight, enquiryDateRange, shiftDate, applicationDate } from '@/lib/request/application-time';

export const runtime = 'nodejs';

function csvCell(value: unknown) {
  const text = value === null || value === undefined
    ? ''
    : typeof value === 'object'
      ? JSON.stringify(value)
      : String(value);
  return `"${text.replace(/"/g, '""')}"`;
}

export async function GET(request: Request) {
  const context = await getAdminContext();
  if (!context) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const url = new URL(request.url);
  const search = url.searchParams.get('search')?.trim().replace(/[%(),]/g, '') ?? '';
  let query = context.supabase.from('enquiries').select('*');
  if (search) query = query.or(`enquiry_number.ilike.%${search}%,name.ilike.%${search}%,mobile1.ilike.%${search}%,email.ilike.%${search}%,course.ilike.%${search}%`);
  const status = url.searchParams.get('status') ?? '';
  if (status) query = query.eq('status', status);
  const dateRange = enquiryDateRange(url.searchParams.get('datePreset') ?? '', url.searchParams.get('fromDate') ?? '', url.searchParams.get('toDate') ?? '');
  if (dateRange) { query = query.gte('submitted_at', applicationMidnight(dateRange.from)); query = query.lt('submitted_at', applicationMidnight(shiftDate(dateRange.to, 1))); }
  const { data, error } = await query.order('submitted_at', { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  const records = data ?? [];
  const columns = records.length ? Object.keys(records[0]) : [];
  const csv = [columns, ...records.map(record => columns.map(column => record[column]))]
    .map(row => row.map(csvCell).join(',')).join('\r\n') + '\r\n';
  return new NextResponse('\uFEFF' + csv, { headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': `attachment; filename="enquiries-${applicationDate()}.csv"`, 'Cache-Control': 'private, no-store' } });
}