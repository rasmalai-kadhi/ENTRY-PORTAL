'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Detail = Record<string, string | null> & { id: string; enquiry_number: string; pdf_storage_path: string; created_at: string; status: string };
const hidden = new Set(['id', 'pdf_storage_path', 'signatureDataUrl']);
const groups = [
  ['Enquiry Information', ['enquiry_number', 'course', 'created_at', 'status']],
  ['Personal Details', ['name', 'dob', 'gender', 'motherName', 'fatherName']],
  ['Contact Details', ['address', 'mobile1', 'mobile2', 'email']],
  ['Academic Details', ['class10Percent', 'class12Stream', 'class12Percent', 'physicsMarks', 'chemistryMarks', 'mathsMarks', 'biologyMarks', 'csMarks', 'schoolNameWithState', 'collegeUniversityName']],
  ['Entrance Examination Details', ['neetUgScore', 'neetPgScore', 'cuetScoreRank', 'cetScoreRank', 'clatScoreRank', 'catScoreRank', 'jeeMainsCrl', 'percentile', 'pcmPercent', 'pcbPercent']],
  ['Category / Reference', ['category', 'reference']],
  ['Other Details', ['courses', 'marks']],
] as const;
const labels: Record<string, string> = { enquiry_number: 'Enquiry ID', created_at: 'Submitted At', status: 'Status', motherName: "Mother's Name", fatherName: "Father's Name", class10Percent: 'Class 10 Percentage', class12Stream: 'Class 12 Stream', class12Percent: 'Class 12 Percentage', schoolNameWithState: 'School Name and State', collegeUniversityName: 'College / University Name', neetUgScore: 'NEET UG Score', neetPgScore: 'NEET PG Score', cuetScoreRank: 'CUET Score / Rank', cetScoreRank: 'UG / PG CET Score / Rank', clatScoreRank: 'CLAT Score / Rank', catScoreRank: 'CAT Score / Percentile', jeeMainsCrl: 'JEE Mains CRL', pcmPercent: 'PCM Percentage', pcbPercent: 'PCB Percentage', courses: 'Other Courses', marks: 'Other Marks Information', reference: 'How did you hear about us?' };
export function EnquiryDetail({ id }: { id: string }) {
  const router = useRouter(); const [data, setData] = useState<Detail | null>(null);
  useEffect(() => { fetch(`/api/admin/enquiries/${id}`).then(async response => { if (response.status === 401) router.replace('/admin/login'); else if (response.ok) setData((await response.json()).data); }); }, [id, router]);
  if (!data) return <main className="admin-shell"><div className="container"><div className="loading-state">Loading enquiry details...</div></div></main>;
  return <main className="admin-shell"><div className="container"><header className="admin-header"><div><Link className="back-link" href="/admin/enquiries">← All enquiries</Link><h1>{data.enquiry_number}</h1><p className="admin-subtitle">Review the submitted information and generated form.</p></div><div className="admin-actions"><a className="btn-secondary" href={`/api/admin/enquiries/${id}/download`}>Download PDF</a><a className="btn-primary" href={`/api/admin/enquiries/${id}/pdf`} target="_blank" rel="noreferrer">Print PDF</a></div></header><div className="detail-layout"><div className="detail-sections">{groups.map(([heading, keys]) => <section className="detail-card" key={heading}><div className="detail-card-heading"><span className="section-eyebrow">Submission record</span><h2>{heading}</h2></div><dl>{keys.filter(key => !hidden.has(key) && data[key] !== undefined).map(key => <div className="data-row" key={key}><dt>{labels[key] ?? key}</dt><dd>{key === 'created_at' ? new Date(data[key] ?? '').toLocaleString() : data[key] || 'Not provided'}</dd></div>)}</dl></section>)}</div><section className="pdf-panel"><div className="pdf-panel-heading"><span className="section-eyebrow">Document preview</span><h2>Generated PDF</h2></div><iframe title="Generated enquiry PDF" src={`/api/admin/enquiries/${id}/pdf`} /></section></div></div></main>;
}
