import { NextResponse } from 'next/server';
import { getAdminContext } from '@/lib/auth/admin';

export const runtime = 'nodejs';

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const context = await getAdminContext();
  if (!context) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  const { data, error } = await context.supabase.from('enquiries').select('enquiry_number, pdf_storage_path').eq('id', id).maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json({ error: 'Enquiry not found' }, { status: 404 });

  const { data: file, error: downloadError } = await context.supabase.storage.from('generated-forms').download(data.pdf_storage_path);
  if (downloadError || !file) return NextResponse.json({ error: 'PDF not found' }, { status: 404 });
  return new NextResponse(file, { headers: { 'Content-Type': 'application/pdf', 'Content-Disposition': `attachment; filename="${data.enquiry_number}.pdf"`, 'Cache-Control': 'private, no-store' } });
}
