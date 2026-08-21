export type PdfAlignment = 'left' | 'center' | 'right';

export type PdfFieldMapping = {
  id?: string;
  template_id: string;
  field_key: string;
  field_label: string;
  page_number: number;
  x: number;
  y: number;
  width: number;
  height: number;
  font_size: number;
  font_family: string;
  alignment: PdfAlignment;
  color: string;
  multiline: boolean;
  rotation: number;
  created_at?: string;
  updated_at?: string;
};

export const PDF_TEMPLATE_ID = 'entry-form';