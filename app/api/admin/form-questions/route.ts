import { NextResponse } from 'next/server';
import { getAdminContext } from '@/lib/auth/admin';
import { questionTypes } from '@/types/form-question';

async function context() { return getAdminContext(); }
function clean(value: unknown) {
  if (!value || typeof value !== 'object') return null;
  const input = value as Record<string, unknown>;
  const fieldKey = String(input.field_key ?? '').trim();
  const label = String(input.label ?? '').trim();
  const type = String(input.type ?? 'text');
  const maxLength = Number(input.max_length ?? 255);
  if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(fieldKey) || !label || !questionTypes.includes(type as typeof questionTypes[number]) || !Number.isInteger(maxLength) || maxLength < 1 || maxLength > 10000) return null;
  return { field_key: fieldKey, label, type, required: Boolean(input.required), allow_alphabets: Boolean(input.allow_alphabets), allow_numbers: Boolean(input.allow_numbers), allow_special_characters: Boolean(input.allow_special_characters), max_length: maxLength, options: Array.isArray(input.options) ? input.options.filter(option => typeof option === 'string').slice(0, 100) : [], display_order: Number.isInteger(input.display_order) ? Number(input.display_order) : 0, active: input.active !== false, placeholder: input.placeholder ? String(input.placeholder).slice(0, 500) : null };
}

export async function GET() {
  const admin = await context();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { data, error } = await admin.supabase.from('form_questions').select('*').order('display_order');
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const admin = await context();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const question = clean(await request.json().catch(() => null));
  if (!question) return NextResponse.json({ error: 'Invalid question.' }, { status: 400 });
  const { data, error } = await admin.supabase.from('form_questions').insert(question).select('*').single();
  if (error) return NextResponse.json({ error: error.code === '23505' ? 'Field key already exists.' : error.message }, { status: error.code === '23505' ? 409 : 500 });
  return NextResponse.json({ data }, { status: 201 });
}

export async function PUT(request: Request) {
  const admin = await context();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await request.json().catch(() => null) as { id?: string; question?: unknown; order?: Array<{ id: string; display_order: number }>; questions?: unknown[]; deletedIds?: string[]; deleteConfirmation?: string } | null;
  if (Array.isArray(body?.questions)) {
    const questions = body.questions.map(clean).filter((question): question is NonNullable<ReturnType<typeof clean>> => question !== null).map(question => ({ ...question, updated_at: new Date().toISOString() }));
    const deletedIds = body.deletedIds ?? [];
    if (deletedIds.length > 1) return NextResponse.json({ error: 'Delete questions individually.' }, { status: 400 });
    if (deletedIds.length && body.deleteConfirmation !== 'DELETE') return NextResponse.json({ error: 'Type DELETE to confirm deletion.' }, { status: 400 });
    if (questions.some(question => !question) || deletedIds.some(id => !id || id.length > 100)) return NextResponse.json({ error: 'Invalid question changes.' }, { status: 400 });
    if (deletedIds.length) {
      const { error } = await admin.supabase.from('form_questions').delete().in('id', deletedIds);
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    }
    if (questions.length) {
      const { error } = await admin.supabase.from('form_questions').upsert(questions, { onConflict: 'field_key' });
      if (error) return NextResponse.json({ error: error.code === '23505' ? 'Field key already exists.' : error.message }, { status: error.code === '23505' ? 409 : 500 });
    }
    const { data, error } = await admin.supabase.from('form_questions').select('*').order('display_order');
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ data });
  }
  if (body?.order) {
    if (body.order.length > 500 || body.order.some(item => !item.id || !Number.isInteger(item.display_order))) return NextResponse.json({ error: 'Invalid order.' }, { status: 400 });
    const results = await Promise.all(body.order.map(item => admin.supabase.from('form_questions').update({ display_order: item.display_order, updated_at: new Date().toISOString() }).eq('id', item.id)));
    const failure = results.find(result => result.error);
    if (failure?.error) return NextResponse.json({ error: failure.error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  }
  if (!body?.id) return NextResponse.json({ error: 'Question id is required.' }, { status: 400 });
  const question = clean(body.question);
  if (!question) return NextResponse.json({ error: 'Invalid question.' }, { status: 400 });
  const { data, error } = await admin.supabase.from('form_questions').update({ ...question, updated_at: new Date().toISOString() }).eq('id', body.id).select('*').single();
  if (error) return NextResponse.json({ error: error.code === '23505' ? 'Field key already exists.' : error.message }, { status: error.code === '23505' ? 409 : 500 });
  return NextResponse.json({ data });
}

export async function DELETE(request: Request) {
  const admin = await context();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const id = new URL(request.url).searchParams.get('id');
  const confirmation = new URL(request.url).searchParams.get('confirmation');
  if (!id) return NextResponse.json({ error: 'Question id is required.' }, { status: 400 });
  if (confirmation !== 'DELETE') return NextResponse.json({ error: 'Type DELETE to confirm deletion.' }, { status: 400 });
  const { error } = await admin.supabase.from('form_questions').delete().eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}