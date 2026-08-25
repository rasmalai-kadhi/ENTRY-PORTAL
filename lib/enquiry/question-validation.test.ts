import { describe, expect, it } from 'vitest';
import { buildQuestionSchema } from './question-validation';
import type { FormQuestion } from '@/types/form-question';

const question = (number_format: 'integer' | 'decimal'): FormQuestion => ({
  id: 'test', field_key: 'score', label: 'Score', type: 'number', number_format,
  required: true, allow_alphabets: false, allow_numbers: true, allow_special_characters: false,
  max_length: 10, options: [], display_order: 1, active: true, placeholder: null,
});

describe('numeric question validation', () => {
  it('preserves valid decimal strings', () => {
    const schema = buildQuestionSchema(question('decimal'));
    for (const value of ['85', '85.5', '85.50', '0.25']) expect(schema.safeParse(value).success).toBe(true);
    expect(schema.safeParse('85.5.0').success).toBe(false);
    expect(schema.safeParse('85a').success).toBe(false);
  });

  it('keeps integer questions whole-number only', () => {
    const schema = buildQuestionSchema(question('integer'));
    expect(schema.safeParse('85').success).toBe(true);
    expect(schema.safeParse('85.5').success).toBe(false);
  });
});
