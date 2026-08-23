import { z } from 'zod';
import type { FormQuestion } from '@/types/form-question';

function characterPattern(question: FormQuestion) {
  let pattern = '';
  if (question.allow_alphabets) pattern += 'A-Za-z';
  if (question.allow_numbers) pattern += '0-9';
  if (question.allow_special_characters) pattern += '\\s\\p{P}';
  return pattern ? new RegExp(`^[${pattern}]*$`, 'u') : null;
}

function isPercentage(question: FormQuestion) {
  return question.type === 'number' && /percent(age)?/i.test(`${question.field_key} ${question.label}`);
}

export function buildQuestionSchema(question: FormQuestion) {
  let schema = z.string().trim();
  if (question.required) schema = schema.min(1, `${question.label} is required`);
  schema = schema.max(question.max_length, `${question.label} must be ${question.max_length} characters or fewer`);
  if (question.type === 'email') schema = schema.refine(value => value === '' || z.email().safeParse(value).success, 'Enter a valid email');
  if (question.type === 'date') schema = schema.refine(value => value === '' || (!Number.isNaN(Date.parse(value)) && /^\d{4}-\d{2}-\d{2}$/.test(value)), 'Enter a valid date');
  if (question.type === 'number') schema = schema.refine(value => value === '' || /^\d+(\.\d+)?$/.test(value), 'Enter a valid number');
  if (question.type === 'phone') schema = schema.refine(value => value === '' || /^\d{10}$/.test(value), 'Enter a 10-digit phone number');
  if (question.type === 'select') schema = schema.refine(value => value === '' || question.options.includes(value), 'Select a valid option');
  const pattern = characterPattern(question);
  if (pattern) schema = schema.refine(value => value === '' || pattern.test(value), `${question.label} contains unsupported characters`);
  if (isPercentage(question)) schema = schema.refine(value => value === '' || (Number(value) >= 0 && Number(value) <= 100), 'Enter a percentage from 0 to 100');
  return schema;
}

export function buildQuestionsSchema(questions: FormQuestion[]) {
  return z.object(Object.fromEntries(questions.map(question => [question.field_key, buildQuestionSchema(question)])));
}

export function normalizeQuestions(value: unknown): FormQuestion[] {
  return Array.isArray(value) ? value.map((rawQuestion: unknown) => {
    const question = rawQuestion as Record<string, unknown>;
    const options = Array.isArray(question.options) ? question.options.filter((option: unknown): option is string => typeof option === 'string') : [];
    return { ...question, options };
  }) as FormQuestion[] : [];
}