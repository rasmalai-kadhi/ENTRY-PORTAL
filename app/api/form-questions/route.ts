import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { normalizeQuestions } from '@/lib/enquiry/question-validation';

export async function GET() {
  const { data, error } = await createAdminClient().from('form_questions').select('*').eq('active', true).order('display_order');
  if (error) return NextResponse.json({ error: 'Unable to load form questions.' }, { status: 500 });
  return NextResponse.json({ data: normalizeQuestions(data) }, { headers: { 'Cache-Control': 'no-store' } });
}