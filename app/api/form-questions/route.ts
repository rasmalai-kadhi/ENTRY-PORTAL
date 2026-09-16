import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { normalizeQuestions } from '@/lib/enquiry/question-validation';

export async function GET() {
  const { data: sections, error: sectionsError } = await createAdminClient().from('form_sections').select('id, title, description, display_order, active').eq('active', true).order('display_order');
  if (sectionsError) return NextResponse.json({ error: 'Unable to load form sections.' }, { status: 500 });
  const { data, error } = await createAdminClient().from('form_questions').select('*').eq('active', true).not('section_id', 'is', null).order('display_order');
  if (error) return NextResponse.json({ error: 'Unable to load form questions.' }, { status: 500 });
  return NextResponse.json({ sections, data: normalizeQuestions(data) }, { headers: { 'Cache-Control': 'no-store' } });
}