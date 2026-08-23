export const questionTypes = ['text', 'number', 'email', 'date', 'textarea', 'select', 'phone'] as const;
export type QuestionType = typeof questionTypes[number];

export type FormQuestion = {
  id: string;
  field_key: string;
  label: string;
  type: QuestionType;
  required: boolean;
  allow_alphabets: boolean;
  allow_numbers: boolean;
  allow_special_characters: boolean;
  max_length: number;
  options: string[];
  display_order: number;
  active: boolean;
  placeholder: string | null;
  created_at?: string;
  updated_at?: string;
};