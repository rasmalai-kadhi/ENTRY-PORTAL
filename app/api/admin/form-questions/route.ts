import { NextResponse } from 'next/server';
import { getAdminContext } from '@/lib/auth/admin';
import { questionTypes } from '@/types/form-question';

async function context() { return getAdminContext(); }

function describeError(operation: string, table: string, error: { code?: string; message?: string; details?: string; hint?: string }) {
  console.error('[FORM CONFIGURATION]', { operation, table, code: error.code, message: error.message, details: error.details, hint: error.hint });
  return `Supabase ${operation} on ${table} failed${error.code ? ` [${error.code}]` : ''}: ${error.message || 'Unknown database error'}${error.details ? ` Details: ${error.details}` : ''}${error.hint ? ` Hint: ${error.hint}` : ''}`;
}

function cleanSection(value: unknown) {
  if (!value || typeof value !== 'object') return null;
  const input = value as Record<string, unknown>;
  const title = String(input.title ?? '').trim().slice(0, 100);
  const description = String(input.description ?? '').trim().slice(0, 300);
  const displayOrder = Number(input.display_order);
  if (!title || !Number.isInteger(displayOrder) || displayOrder < 0) return null;
  const id = input.id && /^[0-9a-f-]{36}$/i.test(String(input.id)) ? String(input.id) : undefined;
  return { ...(id ? { id } : {}), title, description, display_order: displayOrder, active: input.active !== false };
}

function cleanQuestion(value: unknown) {
  if (!value || typeof value !== 'object') return null;
  const input = value as Record<string, unknown>;
  const fieldKey = String(input.field_key ?? '').trim();
  const label = String(input.label ?? '').trim();
  const type = String(input.type ?? 'text');
  const maxLength = Number(input.max_length ?? 255);
  const sectionId = input.section_id ? String(input.section_id).trim() : null;
  const displayOrder = Number(input.display_order);
  if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(fieldKey) || !label || !questionTypes.includes(type as typeof questionTypes[number]) || !Number.isInteger(maxLength) || maxLength < 1 || maxLength > 10000 || (sectionId && !/^[0-9a-f-]{36}$/i.test(sectionId)) || !Number.isInteger(displayOrder) || displayOrder < 0) return null;
  const id = input.id && /^[0-9a-f-]{36}$/i.test(String(input.id)) ? String(input.id) : undefined;
  return { ...(id ? { id } : {}), field_key: fieldKey, label, type, number_format: input.number_format === 'decimal' ? 'decimal' : 'integer', required: Boolean(input.required), allow_alphabets: Boolean(input.allow_alphabets), allow_numbers: Boolean(input.allow_numbers), allow_special_characters: Boolean(input.allow_special_characters), max_length: maxLength, options: Array.isArray(input.options) ? input.options.filter(option => typeof option === 'string').slice(0, 100) : [], display_order: displayOrder, section_id: sectionId, active: input.active !== false, placeholder: input.placeholder ? String(input.placeholder).slice(0, 500) : null };
}

async function load(admin: NonNullable<Awaited<ReturnType<typeof context>>>) {
  const [{ data: sections, error: sectionError }, { data: questions, error: questionError }] = await Promise.all([
    admin.supabase.from('form_sections').select('*').order('display_order'),
    admin.supabase.from('form_questions').select('*').order('display_order'),
  ]);
  if (sectionError) throw new Error(describeError('SELECT', 'form_sections', sectionError));
  if (questionError) throw new Error(describeError('SELECT', 'form_questions', questionError));
  return { sections: sections ?? [], questions: questions ?? [] };
}

export async function GET() {
  const admin = await context();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try { return NextResponse.json(await load(admin)); } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to load form configuration.' }, { status: 500 }); }
}

export async function PUT(request: Request) {
  const admin = await context();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await request.json().catch(() => null) as { sections?: unknown[]; questions?: unknown[]; deletedSectionIds?: string[]; deletedQuestionIds?: string[]; deleteConfirmation?: string } | null;
  if (!Array.isArray(body?.sections) || !Array.isArray(body?.questions)) return NextResponse.json({ error: 'Sections and questions are required.' }, { status: 400 });
  const sections = body.sections.map(cleanSection);
  const questions = body.questions.map(cleanQuestion);
  if (sections.some(section => !section) || questions.some(question => !question)) return NextResponse.json({ error: 'Invalid form configuration.' }, { status: 400 });
  const deletedSectionIds = body.deletedSectionIds ?? [];
  const deletedQuestionIds = body.deletedQuestionIds ?? [];
  if (deletedSectionIds.length + deletedQuestionIds.length > 1) return NextResponse.json({ error: 'Delete items individually.' }, { status: 400 });
  if ((deletedSectionIds.length || deletedQuestionIds.length) && body.deleteConfirmation !== 'DELETE') return NextResponse.json({ error: 'Type DELETE to confirm deletion.' }, { status: 400 });
  try {
    console.info('[FORM CONFIGURATION] SAVE', { sections: sections.map(section => ({ id: section?.id, title: section?.title, display_order: section?.display_order, active: section?.active })), questions: questions.map(question => ({ id: question?.id, field_key: question?.field_key, section_id: question?.section_id, display_order: question?.display_order, active: question?.active })) });
    if (sections.length) {
      const { error } = await admin.supabase.from('form_sections').upsert(sections.map(section => ({ ...section, updated_at: new Date().toISOString() })), { onConflict: 'id' });
      if (error) return NextResponse.json({ error: describeError('UPSERT', 'form_sections', error) }, { status: 400 });
    }
    if (questions.length) {
      const { error } = await admin.supabase.from('form_questions').upsert(questions.map(question => ({ ...question, updated_at: new Date().toISOString() })), { onConflict: 'field_key' });
      if (error) return NextResponse.json({ error: describeError('UPSERT', 'form_questions', error) }, { status: 400 });
    }
    if (deletedSectionIds.length) {
      const { count, error } = await admin.supabase.from('form_questions').select('id', { count: 'exact', head: true }).eq('section_id', deletedSectionIds[0]);
      if (error) return NextResponse.json({ error: describeError('COUNT', 'form_questions', error) }, { status: 400 });
      if (count) return NextResponse.json({ error: 'Reassign all questions from this section before deleting it.' }, { status: 409 });
      const { error: deleteError } = await admin.supabase.from('form_sections').delete().eq('id', deletedSectionIds[0]);
      if (deleteError) return NextResponse.json({ error: describeError('DELETE', 'form_sections', deleteError) }, { status: 400 });
    }
    if (deletedQuestionIds.length) { const { error } = await admin.supabase.from('form_questions').delete().eq('id', deletedQuestionIds[0]); if (error) return NextResponse.json({ error: describeError('DELETE', 'form_questions', error) }, { status: 400 }); }
    return NextResponse.json(await load(admin));
  } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to save form configuration.' }, { status: 500 }); }
}