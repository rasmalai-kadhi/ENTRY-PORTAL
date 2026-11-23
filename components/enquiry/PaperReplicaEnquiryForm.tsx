'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { BookLoader } from '@/components/ui/BookLoader';
import { Toast } from '@/components/ui/Toast';
import { SignaturePad } from './SignaturePad';
import type { FormQuestion } from '@/types/form-question';

interface PaperFormState {
  course: string;
  name: string;
  dob: string;
  gender: string;
  motherName: string;
  fatherName: string;
  address: string;
  mobile1: string;
  mobile2: string;
  email: string;
  class10Percent: string;
  class12Stream: string;
  class12Percent: string;
  physicsMarks: string;
  chemistryMarks: string;
  mathsMarks: string;
  biologyMarks: string;
  csMarks: string;
  pcmPercent: string;
  pcbPercent: string;
  schoolNameWithState: string;
  collegeUniversityName: string;
  courses: string;
  marks: string;
  jeeMainsCrl: string;
  percentile: string;
  cuetScoreRank: string;
  cuetLevel: 'UG' | 'PG' | '';
  cetScoreRank: string;
  cetLevel: 'UG' | 'PG' | '';
  clatScoreRank: string;
  catScoreRank: string;
  neetUgScore: string;
  neetPgScore: string;
  category: string;
  reference: string;
  signatureDataUrl: string;
  description: string;
}

const INITIAL_FORM_STATE: PaperFormState = {
  course: '',
  name: '',
  dob: '',
  gender: '',
  motherName: '',
  fatherName: '',
  address: '',
  mobile1: '',
  mobile2: '',
  email: '',
  class10Percent: '',
  class12Stream: '',
  class12Percent: '',
  physicsMarks: '',
  chemistryMarks: '',
  mathsMarks: '',
  biologyMarks: '',
  csMarks: '',
  pcmPercent: '',
  pcbPercent: '',
  schoolNameWithState: '',
  collegeUniversityName: '',
  courses: '',
  marks: '',
  jeeMainsCrl: '',
  percentile: '',
  cuetScoreRank: '',
  cuetLevel: '',
  cetScoreRank: '',
  cetLevel: '',
  clatScoreRank: '',
  catScoreRank: '',
  neetUgScore: '',
  neetPgScore: '',
  category: '',
  reference: '',
  signatureDataUrl: '',
  description: '',
};

const STREAM_OPTIONS = [
  'SCIENCE(WITH MATHS)',
  'SCIENCE(WITH OUT MATHS)',
  'COMMERCE (WITH MATHS)',
  'COMMERCE (WITHOUT MATHS)',
  'HUMANITIES',
] as const;

const CATEGORY_OPTIONS = [
  'GEN',
  'SC',
  'ST',
  'OBC',
  'EWS',
  'MINORITY',
  'DEFENCE',
  'SPORTS',
] as const;

const POPULAR_COURSES = [
  'MBBS',
  'BDS',
  'B.Tech',
  'BAMS',
  'MD/MS',
  'MBA',
  'BBA',
  'BA LLB',
] as const;

const DRAFT_KEY = 'eduspray-paper-form-draft-v2';

interface Props {
  initialClientIp: string;
  onSwitchToWizard?: () => void;
}

export function PaperReplicaEnquiryForm({ initialClientIp, onSwitchToWizard }: Props) {
  const [formData, setFormData] = useState<PaperFormState>(INITIAL_FORM_STATE);
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [savedDraftExists, setSavedDraftExists] = useState(false);
  const [todayDate, setTodayDate] = useState('');
  const [questionsConfig, setQuestionsConfig] = useState<FormQuestion[]>([]);
  const hydratedRef = useRef(false);

  useEffect(() => {
    setTodayDate(new Intl.DateTimeFormat('en-GB').format(new Date()));

    // Fetch questions to know required fields
    fetch('/api/form-questions', { cache: 'no-store' })
      .then(res => res.json())
      .then(res => {
        if (Array.isArray(res.data)) {
          setQuestionsConfig(res.data);
        }
      })
      .catch(() => {});

    // Check for saved draft
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          const hasAnyData = Object.values(parsed.formData || {}).some(v => Boolean(String(v).trim()));
          if (hasAnyData) {
            setSavedDraftExists(true);
          }
        }
      }
    } catch {
      // Ignore localStorage read errors
    }
    hydratedRef.current = true;
  }, []);

  // Save draft on every change
  useEffect(() => {
    if (!hydratedRef.current) return;
    const hasData = Object.values(formData).some(v => Boolean(String(v || '').trim())) || consent;
    if (hasData) {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ formData, consent }));
    } else {
      localStorage.removeItem(DRAFT_KEY);
    }
  }, [formData, consent]);

  // Unload warning
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      const hasData = Object.values(formData).some(v => Boolean(String(v || '').trim()));
      if (hasData && !isSubmitting) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [formData, isSubmitting]);

  function resumeDraft() {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.formData) setFormData(parsed.formData);
        if (typeof parsed.consent === 'boolean') setConsent(parsed.consent);
      }
    } catch {}
    setSavedDraftExists(false);
  }

  function discardDraft() {
    localStorage.removeItem(DRAFT_KEY);
    setFormData(INITIAL_FORM_STATE);
    setConsent(false);
    setSavedDraftExists(false);
  }

  function updateField<K extends keyof PaperFormState>(field: K, value: PaperFormState[K]) {
    setFormData(prev => ({ ...prev, [field]: value }));
  }

  // Auto-calculate PCM and PCB percentages helper
  function autoCalcAggregates() {
    const phy = parseFloat(formData.physicsMarks);
    const chem = parseFloat(formData.chemistryMarks);
    const math = parseFloat(formData.mathsMarks);
    const bio = parseFloat(formData.biologyMarks);

    if (!isNaN(phy) && !isNaN(chem) && !isNaN(math)) {
      const pcm = ((phy + chem + math) / 3).toFixed(2);
      updateField('pcmPercent', pcm);
    }
    if (!isNaN(phy) && !isNaN(chem) && !isNaN(bio)) {
      const pcb = ((phy + chem + bio) / 3).toFixed(2);
      updateField('pcbPercent', pcb);
    }
  }

  // Real-time validation
  const errors = useMemo(() => {
    const errs: Record<string, string> = {};

    if (!formData.course.trim()) errs.course = 'Applied course is required';
    if (!formData.name.trim()) errs.name = 'Candidate name is required';
    if (!formData.dob.trim()) errs.dob = 'Date of birth is required';
    if (!formData.motherName.trim()) errs.motherName = "Mother's name is required";
    if (!formData.fatherName.trim()) errs.fatherName = "Father's name is required";
    if (!formData.address.trim()) errs.address = 'Address is required';

    if (!formData.mobile1.trim()) {
      errs.mobile1 = 'Primary mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile1.replace(/\D/g, ''))) {
      errs.mobile1 = 'Enter a valid 10-digit mobile number';
    }

    if (formData.mobile2.trim() && !/^\d{10}$/.test(formData.mobile2.replace(/\D/g, ''))) {
      errs.mobile2 = 'Enter a valid 10-digit alternate mobile';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address';
    }

    if (!formData.class10Percent.trim()) {
      errs.class10Percent = 'Class 10% is required';
    } else {
      const val = parseFloat(formData.class10Percent);
      if (isNaN(val) || val < 0 || val > 100) errs.class10Percent = 'Enter 0-100';
    }

    if (!formData.class12Percent.trim()) {
      errs.class12Percent = 'Aggregate 12% is required';
    } else {
      const val = parseFloat(formData.class12Percent);
      if (isNaN(val) || val < 0 || val > 100) errs.class12Percent = 'Enter 0-100';
    }

    if (formData.neetUgScore.trim()) {
      const s = parseInt(formData.neetUgScore, 10);
      if (isNaN(s) || s < 0 || s > 720) errs.neetUgScore = 'Max 720';
    }

    if (formData.neetPgScore.trim()) {
      const s = parseInt(formData.neetPgScore, 10);
      if (isNaN(s) || s < 0 || s > 800) errs.neetPgScore = 'Max 800';
    }

    return errs;
  }, [formData]);

  const isValid = Object.keys(errors).length === 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) {
      setErrorMessage('Please accept the Terms of Use and acknowledge the Privacy Policy to submit.');
      return;
    }
    if (!isValid) {
      const firstKey = Object.keys(errors)[0];
      setErrorMessage(errors[firstKey] || 'Please complete all required fields highlighted in red.');
      const el = document.getElementById(`field-${firstKey}`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el?.focus();
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const payloadAnswers: Record<string, string> = {
        course: formData.course,
        name: formData.name,
        dob: formData.dob,
        gender: formData.gender,
        motherName: formData.motherName,
        fatherName: formData.fatherName,
        address: formData.address,
        mobile1: formData.mobile1,
        mobile2: formData.mobile2,
        email: formData.email,
        class10Percent: formData.class10Percent,
        class12Stream: formData.class12Stream,
        class12Percent: formData.class12Percent,
        physicsMarks: formData.physicsMarks,
        chemistryMarks: formData.chemistryMarks,
        mathsMarks: formData.mathsMarks,
        biologyMarks: formData.biologyMarks,
        csMarks: formData.csMarks,
        pcmPercent: formData.pcmPercent,
        pcbPercent: formData.pcbPercent,
        schoolNameWithState: formData.schoolNameWithState,
        collegeUniversityName: formData.collegeUniversityName,
        courses: formData.courses,
        marks: formData.marks,
        jeeMainsCrl: formData.jeeMainsCrl,
        percentile: formData.percentile,
        cuetScoreRank: formData.cuetScoreRank,
        cuetLevel: formData.cuetLevel,
        cetScoreRank: formData.cetScoreRank,
        cetLevel: formData.cetLevel,
        clatScoreRank: formData.clatScoreRank,
        catScoreRank: formData.catScoreRank,
        neetUgScore: formData.neetUgScore,
        neetPgScore: formData.neetPgScore,
        category: formData.category,
        reference: formData.reference,
        description: formData.description,
      };

      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers: payloadAnswers,
          ...payloadAnswers,
          signatureDataUrl: formData.signatureDataUrl,
          description: formData.description,
          terms_accepted: consent,
        }),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || resData.message || 'Submission failed. Please check form data.');
      }

      localStorage.removeItem(DRAFT_KEY);
      if (resData.clientIp) sessionStorage.setItem('eduspray-submitted-ip', resData.clientIp);
      if (resData.enquiryNumber) sessionStorage.setItem('eduspray-enquiry-number', resData.enquiryNumber);
      window.location.href = '/enquiry/success';
    } catch (err) {
      setIsSubmitting(false);
      setErrorMessage(err instanceof Error ? err.message : 'Unable to submit enquiry. Please retry.');
    }
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="paper-replica-wrapper">
      {/* Top Controls Toolbar */}
      <div className="paper-toolbar no-print">
        <div className="paper-toolbar-info">
          <span className="paper-badge-official">Official Format</span>
          <span className="paper-toolbar-hint">Fill directly into the candidate declaration sheet</span>
        </div>
        <div className="paper-toolbar-actions">
          {onSwitchToWizard && (
            <button
              type="button"
              onClick={onSwitchToWizard}
              className="paper-toolbar-btn secondary"
              title="Switch to step-by-step form wizard"
            >
              📋 Step Wizard Mode
            </button>
          )}
          <button
            type="button"
            onClick={handlePrint}
            className="paper-toolbar-btn print"
            title="Print blank or filled physical form"
          >
            🖨️ Print Form
          </button>
          <button
            type="button"
            onClick={discardDraft}
            className="paper-toolbar-btn text-danger"
            title="Clear all fields and restart"
          >
            Reset Form
          </button>
        </div>
      </div>

      {/* Draft Resume Banner */}
      {savedDraftExists && (
        <div className="draft-prompt paper-draft-banner no-print" role="dialog" aria-labelledby="draft-title">
          <div>
            <h2 id="draft-title">Resume Saved Enquiry Draft?</h2>
            <p>We found information from an unfinished form on this device. Would you like to restore it?</p>
          </div>
          <div className="draft-actions">
            <Button variant="secondary" onClick={discardDraft}>Start Fresh</Button>
            <Button onClick={resumeDraft}>Resume Draft</Button>
          </div>
        </div>
      )}

      {/* The Printable A4 Paper Sheet */}
      <form
        onSubmit={handleSubmit}
        className="paper-sheet"
        id="official-enquiry-sheet"
        noValidate
      >
        {/* ======================================================== */}
        {/* HEADER BLOCK                                             */}
        {/* ======================================================== */}
        <header className="paper-header">
          <div className="paper-masthead">
            <div className="paper-logo-brand">
              <div className="paper-logo-wrapper">
                <Image
                  src="/images/logo.png"
                  alt="Eduspray Logo"
                  width={68}
                  height={68}
                  className="paper-logo-img"
                  priority
                />
              </div>
              <div className="paper-brand-text">
                <h2 className="paper-company-title">EDUSPRAY INDIA PVT. LTD. (Regd.)</h2>
                <p className="paper-company-subtitle">Education Support Services</p>
              </div>
            </div>
          </div>

          {/* Red Ribbon Address Banner */}
          <div className="paper-address-banner">
            <span className="banner-point-left" aria-hidden="true">♦</span>
            <span className="banner-text">104-105, First Floor, Rishabh Tower, Karkardooma Community Center, Delhi - 110092</span>
            <span className="banner-point-right" aria-hidden="true">♦</span>
          </div>

          {/* Contact and Enquiry Strip */}
          <div className="paper-meta-strip">
            <div className="paper-meta-left">
              <span className="paper-meta-item">
                <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                www.eduspray.in
              </span>
              <span className="paper-meta-item">
                <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +91 8595684716
              </span>
            </div>
            <div className="paper-meta-right">
              <span className="paper-meta-item">
                <strong>Date - </strong>
                <span className="paper-date-val">{todayDate || 'DD/MM/YYYY'}</span>
              </span>
              <span className="paper-meta-item">
                <strong>Enquiry No </strong>
                <span className="paper-enq-badge">Assigned on Submit</span>
              </span>
            </div>
          </div>
        </header>

        {/* ======================================================== */}
        {/* FORM TITLE                                               */}
        {/* ======================================================== */}
        <div className="paper-title-row">
          <div className="paper-title-left">
            <span className="paper-title-text">SELF DECLARATION ENQUIRY FORM FOR COURSE :</span>
            <div className="paper-title-input-wrapper">
              <input
                id="field-course"
                type="text"
                className={`paper-line-input course-input ${errors.course ? 'has-error' : ''}`}
                placeholder="e.g. MBBS, BDS, B.Tech, MBA"
                value={formData.course}
                onChange={e => updateField('course', e.target.value)}
                required
              />
            </div>
          </div>
          <div className="paper-title-right">
            <span className="candidate-note">(To be filled by the candidate)</span>
          </div>
        </div>

        {/* Quick Course Selector Chips */}
        <div className="paper-course-chips no-print">
          <span className="chip-label">Quick select:</span>
          {POPULAR_COURSES.map(c => (
            <button
              key={c}
              type="button"
              className={`paper-chip ${formData.course.toLowerCase().includes(c.toLowerCase()) ? 'is-active' : ''}`}
              onClick={() => updateField('course', c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* ======================================================== */}
        {/* PERSONAL & FAMILY DETAILS                                */}
        {/* ======================================================== */}
        <div className="paper-section">
          {/* Row: Name, DOB, M/F */}
          <div className="paper-row flex-row">
            <div className="paper-cell flex-3">
              <label htmlFor="field-name" className="paper-label">Name :</label>
              <input
                id="field-name"
                type="text"
                autoComplete="name"
                className={`paper-line-input ${errors.name ? 'has-error' : ''}`}
                value={formData.name}
                onChange={e => updateField('name', e.target.value)}
                placeholder="Full Name"
                required
              />
            </div>
            <div className="paper-cell flex-2">
              <label htmlFor="field-dob" className="paper-label">DOB :</label>
              <input
                id="field-dob"
                type="date"
                className={`paper-line-input ${errors.dob ? 'has-error' : ''}`}
                value={formData.dob}
                onChange={e => updateField('dob', e.target.value)}
                required
              />
            </div>
            <div className="paper-cell flex-1">
              <label className="paper-label">M / F :</label>
              <div className="gender-toggle-group">
                {(['M', 'F', 'Other'] as const).map(g => (
                  <button
                    key={g}
                    type="button"
                    className={`gender-chip ${formData.gender === g ? 'is-active' : ''}`}
                    onClick={() => updateField('gender', formData.gender === g ? '' : g)}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Row: Mother Name, Father Name */}
          <div className="paper-row flex-row">
            <div className="paper-cell flex-1">
              <label htmlFor="field-motherName" className="paper-label">MOTHER NAME :</label>
              <input
                id="field-motherName"
                type="text"
                className={`paper-line-input ${errors.motherName ? 'has-error' : ''}`}
                value={formData.motherName}
                onChange={e => updateField('motherName', e.target.value)}
                placeholder="Mother's Name"
                required
              />
            </div>
            <div className="paper-cell flex-1">
              <label htmlFor="field-fatherName" className="paper-label">FATHER NAME :</label>
              <input
                id="field-fatherName"
                type="text"
                className={`paper-line-input ${errors.fatherName ? 'has-error' : ''}`}
                value={formData.fatherName}
                onChange={e => updateField('fatherName', e.target.value)}
                placeholder="Father's Name"
                required
              />
            </div>
          </div>

          {/* Row: Address */}
          <div className="paper-row">
            <div className="paper-cell full-width">
              <label htmlFor="field-address" className="paper-label">ADDRESS :</label>
              <input
                id="field-address"
                type="text"
                autoComplete="street-address"
                className={`paper-line-input ${errors.address ? 'has-error' : ''}`}
                value={formData.address}
                onChange={e => updateField('address', e.target.value)}
                placeholder="Complete Residential Address, City, State, PIN"
                required
              />
            </div>
          </div>

          {/* Row: Mobile 1, Mobile 2, Email */}
          <div className="paper-row flex-row">
            <div className="paper-cell flex-2">
              <label htmlFor="field-mobile1" className="paper-label">MOBILE NUMBER : (1)</label>
              <input
                id="field-mobile1"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={10}
                className={`paper-line-input ${errors.mobile1 ? 'has-error' : ''}`}
                value={formData.mobile1}
                onChange={e => updateField('mobile1', e.target.value.replace(/\D/g, ''))}
                placeholder="10-digit number"
                required
              />
            </div>
            <div className="paper-cell flex-2">
              <label htmlFor="field-mobile2" className="paper-label">(2)</label>
              <input
                id="field-mobile2"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                className={`paper-line-input ${errors.mobile2 ? 'has-error' : ''}`}
                value={formData.mobile2}
                onChange={e => updateField('mobile2', e.target.value.replace(/\D/g, ''))}
                placeholder="Alternate (optional)"
              />
            </div>
            <div className="paper-cell flex-3">
              <label htmlFor="field-email" className="paper-label">EMAIL :</label>
              <input
                id="field-email"
                type="email"
                autoComplete="email"
                className={`paper-line-input ${errors.email ? 'has-error' : ''}`}
                value={formData.email}
                onChange={e => updateField('email', e.target.value)}
                placeholder="email@example.com"
              />
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ACADEMIC RECORD DETAILS                                  */}
        {/* ======================================================== */}
        <div className="paper-section">
          {/* Row: Class 10%, Class 12 Stream, Aggregate 12% */}
          <div className="paper-row flex-row">
            <div className="paper-cell flex-1">
              <label htmlFor="field-class10Percent" className="paper-label">CLASS 10th % :</label>
              <input
                id="field-class10Percent"
                type="text"
                inputMode="decimal"
                className={`paper-line-input short-val ${errors.class10Percent ? 'has-error' : ''}`}
                value={formData.class10Percent}
                onChange={e => updateField('class10Percent', e.target.value.replace(/[^0-9.]/g, ''))}
                placeholder="e.g. 92.5"
                required
              />
            </div>
            <div className="paper-cell flex-2">
              <label htmlFor="field-class12Stream" className="paper-label">CLASS 12th (STREAM) :</label>
              <input
                id="field-class12Stream"
                type="text"
                className="paper-line-input"
                value={formData.class12Stream}
                onChange={e => updateField('class12Stream', e.target.value)}
                placeholder="Selected Stream"
              />
            </div>
            <div className="paper-cell flex-1">
              <label htmlFor="field-class12Percent" className="paper-label">AGGREGATE 12th %:</label>
              <input
                id="field-class12Percent"
                type="text"
                inputMode="decimal"
                className={`paper-line-input short-val ${errors.class12Percent ? 'has-error' : ''}`}
                value={formData.class12Percent}
                onChange={e => updateField('class12Percent', e.target.value.replace(/[^0-9.]/g, ''))}
                placeholder="e.g. 88.4"
                required
              />
            </div>
          </div>

          {/* Authentic Stream Checkboxes matching physical form */}
          <div className="paper-stream-row">
            {STREAM_OPTIONS.map(st => {
              const isChecked = formData.class12Stream === st;
              return (
                <label key={st} className={`stream-checkbox-item ${isChecked ? 'is-checked' : ''}`}>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => updateField('class12Stream', isChecked ? '' : st)}
                    className="stream-real-checkbox"
                  />
                  <span className="stream-fake-box" aria-hidden="true">{isChecked ? '✓' : ''}</span>
                  <span className="stream-text">{st}</span>
                </label>
              );
            })}
          </div>

          {/* Row: 12th Marks (Phy, Chem, Math, Bio, CS) */}
          <div className="paper-row marks-row">
            <span className="paper-label bold-label">CLASS 12th Marks :</span>
            <div className="marks-subfield">
              <label htmlFor="field-physicsMarks" className="sub-label">Phy</label>
              <input
                id="field-physicsMarks"
                type="text"
                className="paper-line-input mark-box"
                value={formData.physicsMarks}
                onChange={e => updateField('physicsMarks', e.target.value)}
                onBlur={autoCalcAggregates}
                placeholder="-"
              />
            </div>
            <div className="marks-subfield">
              <label htmlFor="field-chemistryMarks" className="sub-label">Chem</label>
              <input
                id="field-chemistryMarks"
                type="text"
                className="paper-line-input mark-box"
                value={formData.chemistryMarks}
                onChange={e => updateField('chemistryMarks', e.target.value)}
                onBlur={autoCalcAggregates}
                placeholder="-"
              />
            </div>
            <div className="marks-subfield">
              <label htmlFor="field-mathsMarks" className="sub-label">Math</label>
              <input
                id="field-mathsMarks"
                type="text"
                className="paper-line-input mark-box"
                value={formData.mathsMarks}
                onChange={e => updateField('mathsMarks', e.target.value)}
                onBlur={autoCalcAggregates}
                placeholder="-"
              />
            </div>
            <div className="marks-subfield">
              <label htmlFor="field-biologyMarks" className="sub-label">Bio</label>
              <input
                id="field-biologyMarks"
                type="text"
                className="paper-line-input mark-box"
                value={formData.biologyMarks}
                onChange={e => updateField('biologyMarks', e.target.value)}
                onBlur={autoCalcAggregates}
                placeholder="-"
              />
            </div>
            <div className="marks-subfield">
              <label htmlFor="field-csMarks" className="sub-label">CS</label>
              <input
                id="field-csMarks"
                type="text"
                className="paper-line-input mark-box"
                value={formData.csMarks}
                onChange={e => updateField('csMarks', e.target.value)}
                placeholder="-"
              />
            </div>
          </div>

          {/* Row: PCM %, PCB %, School Name with State */}
          <div className="paper-row flex-row">
            <div className="paper-cell flex-1">
              <label htmlFor="field-pcmPercent" className="paper-label">PCM % :</label>
              <input
                id="field-pcmPercent"
                type="text"
                className="paper-line-input short-val"
                value={formData.pcmPercent}
                onChange={e => updateField('pcmPercent', e.target.value)}
                placeholder="-"
              />
            </div>
            <div className="paper-cell flex-1">
              <label htmlFor="field-pcbPercent" className="paper-label">PCB % :</label>
              <input
                id="field-pcbPercent"
                type="text"
                className="paper-line-input short-val"
                value={formData.pcbPercent}
                onChange={e => updateField('pcbPercent', e.target.value)}
                placeholder="-"
              />
            </div>
            <div className="paper-cell flex-3">
              <label htmlFor="field-schoolNameWithState" className="paper-label">SCHOOL Name With State :</label>
              <input
                id="field-schoolNameWithState"
                type="text"
                className="paper-line-input"
                value={formData.schoolNameWithState}
                onChange={e => updateField('schoolNameWithState', e.target.value)}
                placeholder="e.g. DPS, Delhi"
              />
            </div>
          </div>

          {/* Row: College/University Name, Courses, Marks */}
          <div className="paper-row flex-row">
            <div className="paper-cell flex-2">
              <label htmlFor="field-collegeUniversityName" className="paper-label">COLLEGE/UNIVERSITY NAME :</label>
              <input
                id="field-collegeUniversityName"
                type="text"
                className="paper-line-input"
                value={formData.collegeUniversityName}
                onChange={e => updateField('collegeUniversityName', e.target.value)}
                placeholder="If applicable"
              />
            </div>
            <div className="paper-cell flex-1">
              <label htmlFor="field-courses" className="paper-label">Courses :</label>
              <input
                id="field-courses"
                type="text"
                className="paper-line-input"
                value={formData.courses}
                onChange={e => updateField('courses', e.target.value)}
                placeholder="Any completed"
              />
            </div>
            <div className="paper-cell flex-1">
              <label htmlFor="field-marks" className="paper-label">Marks :</label>
              <input
                id="field-marks"
                type="text"
                className="paper-line-input"
                value={formData.marks}
                onChange={e => updateField('marks', e.target.value)}
                placeholder="CGPA / %"
              />
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ENTRANCE EXAM DETAILS WITH SCORE                         */}
        {/* ======================================================== */}
        <div className="paper-section entrance-exam-section">
          <h3 className="entrance-exam-title">Entrance Exam Details With Score</h3>

          {/* Row 1: JEE Mains CRL & Percentile % */}
          <div className="paper-row flex-row">
            <div className="paper-cell flex-1">
              <label htmlFor="field-jeeMainsCrl" className="paper-label">JEE Mains CRL :</label>
              <input
                id="field-jeeMainsCrl"
                type="text"
                className="paper-line-input"
                value={formData.jeeMainsCrl}
                onChange={e => updateField('jeeMainsCrl', e.target.value)}
                placeholder="Rank"
              />
            </div>
            <div className="paper-cell flex-1">
              <label htmlFor="field-percentile" className="paper-label">Percentile % :</label>
              <input
                id="field-percentile"
                type="text"
                className="paper-line-input"
                value={formData.percentile}
                onChange={e => updateField('percentile', e.target.value)}
                placeholder="Overall %"
              />
            </div>
          </div>

          {/* Row 2: CUET & CET Score/Rank + UG/PG */}
          <div className="paper-row flex-row">
            <div className="paper-cell flex-1">
              <label htmlFor="field-cuetScoreRank" className="paper-label">CUET SCORE/RANK :</label>
              <input
                id="field-cuetScoreRank"
                type="text"
                className="paper-line-input short-val"
                value={formData.cuetScoreRank}
                onChange={e => updateField('cuetScoreRank', e.target.value)}
                placeholder="Score"
              />
              <div className="ug-pg-selector">
                <span className="ug-pg-label">UG/PG :</span>
                {(['UG', 'PG'] as const).map(lvl => (
                  <button
                    key={lvl}
                    type="button"
                    className={`level-pill ${formData.cuetLevel === lvl ? 'is-active' : ''}`}
                    onClick={() => updateField('cuetLevel', formData.cuetLevel === lvl ? '' : lvl)}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div className="paper-cell flex-1">
              <label htmlFor="field-cetScoreRank" className="paper-label">CET SCORE/RANK :</label>
              <input
                id="field-cetScoreRank"
                type="text"
                className="paper-line-input short-val"
                value={formData.cetScoreRank}
                onChange={e => updateField('cetScoreRank', e.target.value)}
                placeholder="Score"
              />
              <div className="ug-pg-selector">
                <span className="ug-pg-label">UG/PG :</span>
                {(['UG', 'PG'] as const).map(lvl => (
                  <button
                    key={lvl}
                    type="button"
                    className={`level-pill ${formData.cetLevel === lvl ? 'is-active' : ''}`}
                    onClick={() => updateField('cetLevel', formData.cetLevel === lvl ? '' : lvl)}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3: CLAT & CAT */}
          <div className="paper-row flex-row">
            <div className="paper-cell flex-1">
              <label htmlFor="field-clatScoreRank" className="paper-label">CLAT SCORE / RANK :</label>
              <input
                id="field-clatScoreRank"
                type="text"
                className="paper-line-input"
                value={formData.clatScoreRank}
                onChange={e => updateField('clatScoreRank', e.target.value)}
                placeholder="Score / Rank"
              />
            </div>
            <div className="paper-cell flex-1">
              <label htmlFor="field-catScoreRank" className="paper-label">CAT SCORE / RANK :</label>
              <input
                id="field-catScoreRank"
                type="text"
                className="paper-line-input"
                value={formData.catScoreRank}
                onChange={e => updateField('catScoreRank', e.target.value)}
                placeholder="Percentile / Rank"
              />
            </div>
          </div>

          {/* Row 4: NEET UG & NEET PG with total denominators */}
          <div className="paper-row flex-row">
            <div className="paper-cell flex-1">
              <label htmlFor="field-neetUgScore" className="paper-label">NEET UG SCORE :</label>
              <div className="score-denom-wrapper">
                <input
                  id="field-neetUgScore"
                  type="text"
                  inputMode="numeric"
                  className={`paper-line-input short-val ${errors.neetUgScore ? 'has-error' : ''}`}
                  value={formData.neetUgScore}
                  onChange={e => updateField('neetUgScore', e.target.value.replace(/\D/g, ''))}
                  placeholder="Score"
                />
                <span className="score-denom">/ 720</span>
              </div>
            </div>
            <div className="paper-cell flex-1">
              <label htmlFor="field-neetPgScore" className="paper-label">NEET PG SCORE :</label>
              <div className="score-denom-wrapper">
                <input
                  id="field-neetPgScore"
                  type="text"
                  inputMode="numeric"
                  className={`paper-line-input short-val ${errors.neetPgScore ? 'has-error' : ''}`}
                  value={formData.neetPgScore}
                  onChange={e => updateField('neetPgScore', e.target.value.replace(/\D/g, ''))}
                  placeholder="Score"
                />
                <span className="score-denom">/ 800</span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* CATEGORY & REFERENCE & SIGNATURE                         */}
        {/* ======================================================== */}
        <div className="paper-section">
          {/* Row: Category */}
          <div className="paper-row category-row">
            <span className="paper-label bold-label">CATEGORY :</span>
            <div className="category-chips-group">
              {CATEGORY_OPTIONS.map(cat => (
                <button
                  key={cat}
                  type="button"
                  className={`category-chip ${formData.category === cat ? 'is-active' : ''}`}
                  onClick={() => updateField('category', formData.category === cat ? '' : cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Row: Reference & Signature */}
          <div className="paper-row flex-row signature-row">
            <div className="paper-cell flex-1">
              <label htmlFor="field-reference" className="paper-label">REFRENCE :</label>
              <input
                id="field-reference"
                type="text"
                className="paper-line-input"
                value={formData.reference}
                onChange={e => updateField('reference', e.target.value)}
                placeholder="How did you hear about us? (Seminar, Website, Friend...)"
              />
            </div>
            <div className="paper-cell flex-1 signature-cell">
              <label className="paper-label">Signature :</label>
              <SignaturePad
                value={formData.signatureDataUrl}
                onChange={url => updateField('signatureDataUrl', url)}
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DOTTED TEAR-OFF CUT LINE DIVIDER                         */}
        {/* ======================================================== */}
        <div className="paper-tear-divider" aria-hidden="true">
          <span className="tear-scissor">✂</span>
          <span className="tear-dash-line" />
        </div>

        {/* ======================================================== */}
        {/* DESCRIPTION / NOTES SECTION                              */}
        {/* ======================================================== */}
        <div className="paper-section description-section">
          <label htmlFor="field-description" className="paper-desc-title">Description :</label>
          <textarea
            id="field-description"
            rows={3}
            className="paper-desc-textarea"
            value={formData.description}
            onChange={e => updateField('description', e.target.value)}
            placeholder="Add candidate notes, specific career requirements, budget preferences, or remarks..."
          />
        </div>

        {/* ======================================================== */}
        {/* TERMS, PRIVACY & SUBMIT ACTION                          */}
        {/* ======================================================== */}
        <div className="paper-submit-container no-print">
          <label className="consent-row paper-consent">
            <input
              type="checkbox"
              checked={consent}
              onChange={e => setConsent(e.target.checked)}
              required
            />
            <span>
              I agree to the <a href="/terms" target="_blank" rel="noreferrer">Terms of Use</a> and acknowledge the{' '}
              <a href="/privacy" target="_blank" rel="noreferrer">Privacy/Data Collection Policy</a>.
            </span>
          </label>

          {(!isValid || !consent) && (
            <p className="paper-validation-hint" role="status">
              {!isValid ? '⚠️ Please complete all required personal and academic details before submitting.' : '⚠️ Please check the consent box above to proceed.'}
            </p>
          )}

          <div className="paper-actions-bar">
            <Button
              type="submit"
              className="paper-submit-btn"
              disabled={!isValid || !consent || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="submit-spinner" aria-hidden="true" />
                  Submitting Form...
                </>
              ) : (
                'Submit Declaration Enquiry'
              )}
            </Button>
          </div>

          <p className="form-connection-status" aria-live="polite">
            Network record: <strong>{initialClientIp}</strong>. This portal collects IP addresses as described in the{' '}
            <a href="/privacy">Privacy/Data Collection Policy</a>.
          </p>
        </div>
      </form>

      {/* Submission Overlay BookLoader */}
      {isSubmitting && (
        <div className="submission-overlay" role="status" aria-label="Submitting enquiry">
          <BookLoader text="Generating your official document and saving enquiry..." />
        </div>
      )}

      {/* Toast Alert */}
      {errorMessage && (
        <Toast
          message={errorMessage}
          error
          onClose={() => setErrorMessage(null)}
        />
      )}
    </div>
  );
}
