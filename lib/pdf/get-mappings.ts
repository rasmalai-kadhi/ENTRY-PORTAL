import { PDF_TEMPLATE_ID, type PdfFieldMapping } from '@/types/pdf-mapping';
import { createAdminClient } from '@/lib/supabase/admin';

export async function getPdfFieldMappings(): Promise<PdfFieldMapping[]> {
  const { data, error } = await createAdminClient()
    .from('pdf_field_mappings')
    .select('*')
    .eq('template_id', PDF_TEMPLATE_ID)
    .order('page_number')
    .order('field_label');

  if (error) throw new Error(`Unable to load PDF field mappings: ${error.message}`);
  if (!data?.length) throw new Error(`No saved PDF field mappings found for template "${PDF_TEMPLATE_ID}".`);
  return data as PdfFieldMapping[];
}