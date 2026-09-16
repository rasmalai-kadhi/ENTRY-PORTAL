'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/Button';
import { BookLoader } from '@/components/ui/BookLoader';
import { SkeletonLine } from '@/components/ui/Skeleton';
import { Toast } from '@/components/ui/Toast';
import { buildQuestionSchema, buildQuestionsSchema } from '@/lib/enquiry/question-validation';
import type { FormQuestion } from '@/types/form-question';

const DRAFT_KEY = 'eduspray-enquiry-draft-v1';
type Answers = Record<string, string>;
type Draft = { values: Answers; consent: boolean };
type FormSection = { id: string; title: string; description: string; display_order: number; active: boolean };
type Section = { key: string; title: string; description: string; questions: FormQuestion[] };

function makeSections(sections: FormSection[], questions: FormQuestion[]): Section[] {
  return [...sections].sort((a, b) => a.display_order - b.display_order).map(section => ({ key: section.id, title: section.title, description: section.description, questions: questions.filter(question => question.section_id === section.id).sort((a, b) => a.display_order - b.display_order) }));
}

export function EnquiryForm({ initialClientIp }: { initialClientIp: string }) {
  const [questions, setQuestions] = useState<FormQuestion[] | null>(null);
  const [sections, setSections] = useState<FormSection[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  useEffect(() => { fetch('/api/form-questions', { cache: 'no-store' }).then(async response => { if (!response.ok) throw new Error(); const result = await response.json(); setQuestions(result.data ?? []); setSections(result.sections ?? []); }).catch(() => setLoadError(true)); }, []);
  if (loadError) return <div className="admin-alert" role="alert">Unable to load the enquiry form. Please refresh and try again.</div>;
  if (!questions || !sections) return <div className="card enquiry-form-loading" role="status" aria-label="Loading enquiry form"><SkeletonLine width="42%" height={24} /><SkeletonLine width="76%" height={16} /><div className="enquiry-form-skeleton-fields"><SkeletonLine height={44} /><SkeletonLine height={44} /><SkeletonLine height={44} /><SkeletonLine height={44} /></div></div>;
  if (!sections.length) return <div className="card">The enquiry form is not available right now.</div>;
  return <DynamicQuestionForm questions={questions} sections={sections} initialClientIp={initialClientIp} />;
}

function DynamicQuestionForm({ questions, sections: configuredSections, initialClientIp }: { questions: FormQuestion[]; sections: FormSection[]; initialClientIp: string }) {
  const sections = useMemo(() => makeSections(configuredSections, questions), [configuredSections, questions]);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [savedDraft, setSavedDraft] = useState<Draft | null>(null);
  const [draftChoiceVisible, setDraftChoiceVisible] = useState(true);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [isSubmissionActive, setIsSubmissionActive] = useState(false);
  const hydratedDraft = useRef(false);
  const submissionState = useRef<'idle' | 'submitting' | 'completed'>('idle');
  const schema = useMemo(() => buildQuestionsSchema(questions), [questions]);
  const defaultValues = useMemo(() => Object.fromEntries(questions.map(question => [question.field_key, ''])), [questions]);
  const { register, handleSubmit, watch, trigger, reset, formState: { errors, isSubmitting, isValid } } = useForm<Answers>({ resolver: zodResolver(schema), mode: 'onChange', reValidateMode: 'onChange', defaultValues });
  const values = watch();
  const currentSection = sections[currentStep];
  const requiredQuestions = questions.filter(question => question.required);
  const validRequiredCount = requiredQuestions.filter(question => buildQuestionSchema(question).safeParse(String(values[question.field_key] ?? '')).success).length;
  const progress = Math.round(((validRequiredCount + (consent ? 1 : 0)) / Math.max(requiredQuestions.length + 1, 1)) * 100);

  useEffect(() => { try { const raw = localStorage.getItem(DRAFT_KEY); if (!raw) { hydratedDraft.current = true; setDraftChoiceVisible(false); return; } const draft = JSON.parse(raw) as Draft; if (draft?.values && (Object.values(draft.values).some(Boolean) || draft.consent)) setSavedDraft(draft); else { localStorage.removeItem(DRAFT_KEY); hydratedDraft.current = true; setDraftChoiceVisible(false); } } catch { hydratedDraft.current = true; setDraftChoiceVisible(false); } }, []);
  useEffect(() => { if (!hydratedDraft.current) return; const hasData = Object.values(values).some(value => String(value ?? '').trim()) || consent; if (hasData) localStorage.setItem(DRAFT_KEY, JSON.stringify({ values, consent } satisfies Draft)); else localStorage.removeItem(DRAFT_KEY); }, [values, consent]);
  useEffect(() => { const hasData = Object.values(values).some(value => String(value ?? '').trim()) || consent; if (!hasData) return; const warn = (event: BeforeUnloadEvent) => { if (submissionState.current !== 'idle') return; event.preventDefault(); event.returnValue = ''; }; window.addEventListener('beforeunload', warn); return () => window.removeEventListener('beforeunload', warn); }, [values, consent]);

  function resumeDraft() { if (!savedDraft) return; reset(savedDraft.values); setConsent(savedDraft.consent); hydratedDraft.current = true; setDraftChoiceVisible(false); }
  function startOver() { localStorage.removeItem(DRAFT_KEY); reset(defaultValues); setConsent(false); setSavedDraft(null); hydratedDraft.current = true; setDraftChoiceVisible(false); setCurrentStep(0); }
  function scrollToFirstInvalid(keys: string[]) { const key = keys.find(item => errors[item]) || keys.find(item => !String(values[item] ?? '').trim()); if (!key) return; const field = document.getElementsByName(key)[0] as HTMLElement | undefined; field?.scrollIntoView({ behavior: 'smooth', block: 'center' }); field?.focus(); }
  async function nextStep() { const keys = currentSection.questions.map(question => question.field_key); const valid = await trigger(keys); if (!valid) { window.setTimeout(() => scrollToFirstInvalid(keys), 0); return; } setCurrentStep(step => Math.min(step + 1, sections.length - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  function previousStep() { setCurrentStep(step => Math.max(step - 1, 0)); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  function fieldProps(key: string) { const question = questions.find(item => item.field_key === key)!; const registration = register(key); return { ...registration, onFocus: () => setFocusedField(key), onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { if (question.type === 'number') { const sanitized = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'); event.target.value = question.number_format === 'integer' ? sanitized.replace('.', '') : sanitized; } void registration.onChange(event); }, onBlur: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { registration.onBlur(event); setFocusedField(null); } }; }
  function fieldClass(question: FormQuestion) { const value = String(values[question.field_key] ?? ''); const invalid = Boolean(errors[question.field_key]) || (question.required && !value.trim()); const valid = Boolean(value.trim()) && !invalid; return `question-control${focusedField === question.field_key ? ' is-focused' : invalid ? ' is-invalid' : valid ? ' is-valid' : ''}`; }
  async function onSubmit(answers: Answers) { submissionState.current = 'submitting'; try { const response = await fetch('/api/enquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ answers, ...answers, terms_accepted: consent, signatureDataUrl: '' }) }); const text = await response.text(); const json = text ? JSON.parse(text) as { error?: string; message?: string; clientIp?: string; enquiryNumber?: string } : {}; if (!response.ok) throw new Error(json.error || json.message || `Submission failed with status ${response.status}.`); submissionState.current = 'completed'; localStorage.removeItem(DRAFT_KEY); reset(defaultValues); setConsent(false); setSavedDraft(null); if (json.clientIp) sessionStorage.setItem('eduspray-submitted-ip', json.clientIp); if (json.enquiryNumber) sessionStorage.setItem('eduspray-enquiry-number', json.enquiryNumber); window.location.href = '/enquiry/success'; } catch (error) { submissionState.current = 'idle'; setSubmissionError(error instanceof Error ? error.message : 'Unable to submit enquiry.'); } }

  async function submitForm(answers: Answers) {
    setSubmissionError(null);
    setIsSubmissionActive(true);
    await onSubmit(answers);
    setIsSubmissionActive(false);
  }

  return <>
    {draftChoiceVisible && savedDraft && <div className="draft-prompt" role="dialog" aria-labelledby="draft-title"><div><h2 id="draft-title">Resume your enquiry?</h2><p>We found saved information from an unfinished form on this device.</p></div><div className="draft-actions"><Button variant="secondary" onClick={startOver}>Start over</Button><Button onClick={resumeDraft}>Resume form</Button></div></div>}
    <div className="enquiry-form-shell">
    <form className="card grid enquiry-form" onSubmit={handleSubmit(submitForm)} inert={isSubmissionActive || undefined}>
      <div className="progress-panel"><div className="progress-heading"><strong>Step {currentStep + 1} of {sections.length}</strong><span>{progress}% complete</span></div><div className="progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><span style={{ width: `${progress}%` }} /></div><div className="progress-steps">{sections.map((section, index) => <span className={index === currentStep ? 'is-current' : index < currentStep && section.questions.filter(question => question.required).every(question => buildQuestionSchema(question).safeParse(String(values[question.field_key] ?? '')).success) ? 'is-complete' : ''} key={section.key}>{index + 1}. {section.title}</span>)}</div></div>
      <div className="section-intro"><p className="section-eyebrow">Section {currentStep + 1}</p><h2>{currentSection.title}</h2><p>{currentSection.description}</p></div>
      <div className="form-grid">{currentStep === 0 && <div className="field"><label htmlFor="submission-date">Date</label><span className="field-description">Generated when this enquiry is submitted.</span><input className="question-control" id="submission-date" value={new Intl.DateTimeFormat('en-GB').format(new Date())} readOnly /></div>}{currentSection.questions.map(question => <div className={`field${question.type === 'textarea' ? ' field-full' : ''}`} key={question.id}><label htmlFor={question.field_key}>{question.label}{question.required && <span className="required-mark" aria-hidden="true"> *</span>}</label><span className="field-description">{question.placeholder || ''}</span>{question.type === 'textarea' ? <textarea className={fieldClass(question)} id={question.field_key} rows={3} placeholder={question.placeholder ?? ''} aria-invalid={errors[question.field_key] ? 'true' : 'false'} {...fieldProps(question.field_key)} /> : question.type === 'select' ? <select className={fieldClass(question)} id={question.field_key} defaultValue="" aria-invalid={errors[question.field_key] ? 'true' : 'false'} {...fieldProps(question.field_key)}><option value="">{question.placeholder || 'Select an option'}</option>{question.options.map((option: string) => <option value={option} key={option}>{option}</option>)}</select> : <input className={fieldClass(question)} id={question.field_key} type={question.type === 'phone' ? 'tel' : question.type === 'number' ? 'text' : question.type} inputMode={question.type === 'phone' ? 'numeric' : question.type === 'number' ? question.number_format === 'decimal' ? 'decimal' : 'numeric' : undefined} step={question.type === 'number' ? question.number_format === 'decimal' ? 'any' : '1' : undefined} maxLength={question.max_length} placeholder={question.placeholder ?? ''} aria-invalid={errors[question.field_key] ? 'true' : 'false'} {...fieldProps(question.field_key)} />}{errors[question.field_key] && <span className="error">{String(errors[question.field_key]?.message ?? '')}</span>}</div>)}</div>
      {currentStep === sections.length - 1 && <label className="consent-row"><input type="checkbox" checked={consent} onChange={event => setConsent(event.target.checked)} /> <span>I agree to the <a href="/terms" target="_blank" rel="noreferrer">Terms of Use</a> and acknowledge the <a href="/privacy" target="_blank" rel="noreferrer">Privacy/Data Collection Policy</a>.</span></label>}
      {currentStep === sections.length - 1 && (!isValid || !consent) && <p className="form-submit-hint" role="status">{!isValid ? 'Complete all required fields to submit.' : 'Accept the Terms of Use and Privacy/Data Collection Policy to submit.'}</p>}
      <div className="step-actions">{currentStep > 0 && <Button variant="secondary" onClick={previousStep} disabled={isSubmitting}>Back</Button>}{currentStep < sections.length - 1 ? <Button type="button" onClick={nextStep} disabled={isSubmitting}>Next</Button> : <Button className="form-submit" type="submit" disabled={!isValid || !consent || isSubmitting}>{isSubmitting ? <><span className="submit-spinner" aria-hidden="true" />Submitting...</> : 'Submit Enquiry'}</Button>}</div>
      <p className="form-connection-status" aria-live="polite">Network record: <strong>{initialClientIp}</strong>. This portal collects IP addresses as described in the <a href="/privacy">Privacy/Data Collection Policy</a>.</p>
    </form>
    {isSubmissionActive && <div className="submission-overlay" role="status" aria-label="Submitting enquiry"><BookLoader text="Submitting..." /></div>}
    </div>
    {submissionError && <Toast message={submissionError} error onClose={() => setSubmissionError(null)} />}
  </>;
}