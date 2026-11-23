import { NextResponse } from 'next/server';
import { getAdminContext } from '@/lib/auth/admin';
import { generateEnquiryPdf } from '@/lib/pdf/generate';
import type { Enquiry } from '@/types/enquiry';

export const runtime = 'nodejs';

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const context = await getAdminContext();
  if (!context) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  const { data, error } = await context.supabase.from('enquiries').select('*').eq('id', id).maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json({ error: 'Enquiry not found' }, { status: 404 });

  let fileBuffer: Buffer | null = null;
  if (data.pdf_storage_path) {
    try {
      const { data: file, error: downloadError } = await context.supabase.storage.from('generated-forms').download(data.pdf_storage_path);
      if (!downloadError && file) {
        fileBuffer = Buffer.from(await file.arrayBuffer());
      }
    } catch {
      fileBuffer = null;
    }
  }

  // Fallback to generating on the fly if not yet in storage
  if (!fileBuffer) {
    try {
      const generated = await generateEnquiryPdf(data as unknown as Enquiry);
      fileBuffer = Buffer.from(generated);
    } catch (genError) {
      return NextResponse.json({ error: 'Unable to render PDF.' }, { status: 500 });
    }
  }

  return new NextResponse(fileBuffer as unknown as BodyInit, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${data.enquiry_number || 'enquiry'}.pdf"`,
      'Cache-Control': 'private, no-store'
    }
  });
}
