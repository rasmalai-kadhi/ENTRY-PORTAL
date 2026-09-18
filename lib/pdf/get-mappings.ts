import { PDF_TEMPLATE_ID, type PdfFieldDefinition, type PdfFieldMapping, type PdfMappingData } from '@/types/pdf-mapping';
import { createAdminClient } from '@/lib/supabase/admin';

export async function getPdfFieldMappings(): Promise<PdfFieldMapping[]> {
  const { data, error } = await createAdminClient()
    .from('pdf_field_mappings')
    .select('*')
    .eq('template_id', PDF_TEMPLATE_ID)
    .order('page_number')
    .order('field_label');

  if (error) throw new Error(`Unable to load PDF field mappings: ${error.message}`);
  return data as PdfFieldMapping[];
}

export async function getPdfMappingData(): Promise<PdfMappingData> {
  const supabase = createAdminClient();
  const [{ data: questions, error: questionsError }, mappings] = await Promise.all([
    supabase.from('form_questions').select('field_key, label').eq('active', true).order('display_order'),
    getPdfFieldMappings(),
  ]);
  if (questionsError) throw new Error(`Unable to load active form questions: ${questionsError.message}`);
  const fields = (questions ?? []) as PdfFieldDefinition[];
  const labels = new Map(fields.map(field => [field.field_key, field.label]));
  return {
    fields,
    mappings: mappings.map(mapping => ({ ...mapping, field_label: labels.get(mapping.field_key) ?? mapping.field_label ?? mapping.field_key })),
  };
}