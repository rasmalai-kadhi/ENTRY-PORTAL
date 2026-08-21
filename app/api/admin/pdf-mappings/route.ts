import { NextResponse } from 'next/server';
import { getAdminContext } from '@/lib/auth/admin';
import { getPdfFieldMappings } from '@/lib/pdf/get-mappings';
import { PDF_TEMPLATE_ID } from '@/types/pdf-mapping';

export const runtime = 'nodejs';

export async function GET() {
  const context = await getAdminContext();
  if (!context) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    return NextResponse.json({ data: await getPdfFieldMappings() });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to load mappings.' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const context = await getAdminContext();
  if (!context) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await request.json().catch(() => null) as { mappings?: unknown } | null;
  if (!Array.isArray(body?.mappings) || body.mappings.length > 200) return NextResponse.json({ error: 'Invalid mappings.' }, { status: 400 });
  const mappings = body.mappings.map((mapping: Record<string, unknown>) => {
    const { id: _id, created_at: _createdAt, updated_at: _updatedAt, ...values } = mapping;
    return {
    ...values,
    template_id: PDF_TEMPLATE_ID,
    page_number: Math.max(1, Math.round(Number(mapping.page_number))),
    x: Math.max(0, Number(mapping.x)), y: Math.max(0, Number(mapping.y)),
    width: Math.max(1, Number(mapping.width)), height: Math.max(1, Number(mapping.height)),
    font_size: Math.max(1, Number(mapping.font_size)), rotation: Number(mapping.rotation) || 0,
    };
  });
  const { data, error } = await context.supabase.from('pdf_field_mappings').upsert(mappings, { onConflict: 'template_id,field_key' }).select('*');
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  const keys = mappings.map(mapping => String((mapping as Record<string, unknown>).field_key));
  const { error: deleteError } = await context.supabase.from('pdf_field_mappings').delete().eq('template_id', PDF_TEMPLATE_ID).not('field_key', 'in', `(${keys.map(key => `"${key.replaceAll('"', '""')}"`).join(',') || '"__none__"'})`);
  if (deleteError) return NextResponse.json({ error: deleteError.message }, { status: 500 });
  return NextResponse.json({ data: data ?? [] });
}