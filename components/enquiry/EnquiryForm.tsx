"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import type { FormQuestion } from "@/types/form-question";
import { buildQuestionsSchema } from "@/lib/enquiry/question-validation";

export function EnquiryForm({ initialClientIp }: { initialClientIp: string }) {
  const [questions, setQuestions] = useState<FormQuestion[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  useEffect(() => { fetch('/api/form-questions', { cache: 'no-store' }).then(async response => { if (!response.ok) throw new Error(); setQuestions((await response.json()).data ?? []); }).catch(() => setLoadError(true)); }, []);
  if (loadError) return <div className="admin-alert" role="alert">Unable to load the enquiry form. Please refresh and try again.</div>;
  if (!questions) return <div className="card">Loading enquiry form...</div>;
  if (!questions.length) return <div className="card">The enquiry form is not available right now.</div>;
  return <DynamicQuestionForm questions={questions} initialClientIp={initialClientIp} />;
}

function DynamicQuestionForm({ questions, initialClientIp }: { questions: FormQuestion[]; initialClientIp: string }) {
  const clientIp = initialClientIp;
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  const schema = buildQuestionsSchema(questions);
  const { register, handleSubmit, watch, formState: { errors, isSubmitting, isValid } } = useForm<Record<string, string>>({ resolver: zodResolver(schema), mode: "onChange", reValidateMode: "onChange", defaultValues: Object.fromEntries(questions.map(question => [question.field_key, ''])) });
  const values = watch();
  function fieldProps(key: string) { const registration = register(key); return { ...registration, onFocus: () => setFocusedField(key), onBlur: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { registration.onBlur(event); setFocusedField(null); } }; }
  function fieldClass(question: FormQuestion) { const value = String(values[question.field_key] ?? ''); const invalid = Boolean(errors[question.field_key]) || (question.required && !value.trim()); const valid = Boolean(value.trim()) && !invalid; return `question-control${focusedField === question.field_key ? ' is-focused' : invalid ? ' is-invalid' : valid ? ' is-valid' : ''}`; }
  async function onSubmit(answers: Record<string, string>) {
    try {
      const response = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ answers, ...answers, terms_accepted: consent, signatureDataUrl: "" }) });
      const text = await response.text();
      const json = text ? JSON.parse(text) as { error?: string; message?: string; clientIp?: string } : {};
      if (!response.ok) throw new Error(json.error || json.message || `Submission failed with status ${response.status}.`);
      if (json.clientIp) sessionStorage.setItem("eduspray-submitted-ip", json.clientIp);
      window.location.href = "/enquiry/success";
    } catch (error) { alert(error instanceof Error ? error.message : "Unable to submit enquiry."); }
  }
  return <form className="card grid" onSubmit={handleSubmit(onSubmit)}><div className="form-grid">{questions.map(question => <div className={`field${question.type === 'textarea' ? ' field-full' : ''}`} key={question.id}><label htmlFor={question.field_key}>{question.label}{question.required && <span className="required-mark" aria-hidden="true"> *</span>}</label><span className="field-description">{question.placeholder || ''}</span>{question.type === 'textarea' ? <textarea className={fieldClass(question)} id={question.field_key} rows={3} placeholder={question.placeholder ?? ''} aria-invalid={errors[question.field_key] ? "true" : "false"} {...fieldProps(question.field_key)} /> : question.type === 'select' ? <select className={fieldClass(question)} id={question.field_key} defaultValue="" aria-invalid={errors[question.field_key] ? "true" : "false"} {...fieldProps(question.field_key)}><option value="">{question.placeholder || 'Select an option'}</option>{question.options.map((option: string) => <option value={option} key={option}>{option}</option>)}</select> : <input className={fieldClass(question)} id={question.field_key} type={question.type === 'phone' ? 'tel' : question.type} inputMode={question.type === 'phone' || question.type === 'number' ? 'numeric' : undefined} maxLength={question.max_length} placeholder={question.placeholder ?? ''} aria-invalid={errors[question.field_key] ? "true" : "false"} {...fieldProps(question.field_key)} />}{errors[question.field_key] && <span className="error">{String(errors[question.field_key]?.message ?? '')}</span>}</div>)}</div><label className="consent-row"><input type="checkbox" checked={consent} onChange={event => setConsent(event.target.checked)} /> <span>I agree to the <a href="/terms" target="_blank" rel="noreferrer">Terms of Use</a> and acknowledge the <a href="/privacy" target="_blank" rel="noreferrer">Privacy/Data Collection Policy</a>.</span></label>{(!isValid || !consent) && <p className="form-submit-hint" role="status">{!isValid ? 'Complete all required fields to submit.' : 'Accept the Terms of Use and Privacy/Data Collection Policy to submit.'}</p>}<Button className="form-submit" type="submit" disabled={!isValid || !consent || isSubmitting}>{isSubmitting ? "Submitting..." : "Submit Enquiry"}</Button><p className="form-connection-status" aria-live="polite">Network record: <strong>{clientIp}</strong>. This portal collects IP addresses as described in the <a href="/privacy">Privacy/Data Collection Policy</a>.</p></form>;
}