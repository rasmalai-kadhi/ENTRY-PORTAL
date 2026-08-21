import { NextResponse } from 'next/server';
import { getAdminContext } from '@/lib/auth/admin';
import { stampPdf } from '@/lib/pdf/stamp';
import type { Enquiry } from '@/types/enquiry';
import type { PdfFieldMapping } from '@/types/pdf-mapping';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  if (!await getAdminContext()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await request.json().catch(() => null) as { enquiry?: Enquiry; mappings?: PdfFieldMapping[] } | null;
  if (!body?.enquiry || !Array.isArray(body.mappings) || body.mappings.length > 200) return NextResponse.json({ error: 'Invalid preview data.' }, { status: 400 });

  const bytes = await stampPdf(body.enquiry, body.mappings);
  return new NextResponse(Buffer.from(bytes), { headers: { 'Content-Type': 'application/pdf', 'Cache-Control': 'private, no-store' } });
}