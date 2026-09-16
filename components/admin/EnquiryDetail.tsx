'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { formatDob } from '@/lib/enquiry/dob';
import { Toast } from '@/components/ui/Toast';
import { BookLoader } from '@/components/ui/BookLoader';

type Detail = Record<string, string | null> & {
  id: string;
  enquiry_number: string;
  pdf_storage_path: string;
  created_at: string;
  status: string;
  google_sheet_synced?: boolean;
  google_sheet_synced_at?: string;
  google_sheet_error?: string;
};

const hidden = new Set(['id', 'pdf_storage_path', 'signatureDataUrl', 'google_sheet_synced', 'google_sheet_synced_at', 'google_sheet_error', 'google_sheet_row_id']);

const groups = [
  ['Enquiry Information', ['enquiry_number', 'course', 'created_at', 'status']],
  ['Personal Details', ['name', 'dob', 'gender', 'motherName', 'fatherName']],
  ['Contact Details', ['address', 'mobile1', 'mobile2', 'email']],
  ['Academic Details', ['class10Percent', 'class12Stream', 'class12Percent', 'physicsMarks', 'chemistryMarks', 'mathsMarks', 'biologyMarks', 'csMarks', 'schoolNameWithState', 'collegeUniversityName']],
  ['Entrance Examination Details', ['neetUgScore', 'neetPgScore', 'cuetScoreRank', 'cetScoreRank', 'clatScoreRank', 'catScoreRank', 'jeeMainsCrl', 'percentile', 'pcmPercent', 'pcbPercent']],
  ['Category / Reference', ['category', 'reference']],
  ['Other Details', ['courses', 'marks']],
] as const;

const labels: Record<string, string> = {
  enquiry_number: 'Enquiry ID',
  created_at: 'Submitted At',
  status: 'Status',
  motherName: "Mother's Name",
  fatherName: "Father's Name",
  class10Percent: 'Class 10 Percentage',
  class12Stream: 'Class 12 Stream',
  class12Percent: 'Class 12 Percentage',
  schoolNameWithState: 'School Name and State',
  collegeUniversityName: 'College / University Name',
  neetUgScore: 'NEET UG Score',
  neetPgScore: 'NEET PG Score',
  cuetScoreRank: 'CUET Score / Rank',
  cetScoreRank: 'UG / PG CET Score / Rank',
  clatScoreRank: 'CLAT Score / Rank',
  catScoreRank: 'CAT Score / Percentile',
  jeeMainsCrl: 'JEE Mains CRL',
  pcmPercent: 'PCM Percentage',
  pcbPercent: 'PCB Percentage',
  courses: 'Other Courses',
  marks: 'Other Marks Information',
  reference: 'How did you hear about us?',
};

export function EnquiryDetail({ id }: { id: string }) {
  const router = useRouter();
  const [data, setData] = useState<Detail | null>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteText, setDeleteText] = useState('');
  const [notice, setNotice] = useState('');
  const [syncLoading, setSyncLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [pdfAction, setPdfAction] = useState<'idle' | 'download' | 'print'>('idle');
  const [pdfLoading, setPdfLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/enquiries/${id}`).then(async response => {
      if (response.status === 401) router.replace('/admin/login');
      else if (response.ok) setData((await response.json()).data);
    });
  }, [id, router]);

  async function deleteEnquiry() {
    if (deleteText !== 'DELETE' || deleteLoading) return;
    setDeleteLoading(true);
    try {
      const response = await fetch(`/api/admin/enquiries/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ confirmation: 'DELETE' }),
      });
      if (!response.ok) {
        setNotice((await response.json()).error ?? 'Unable to delete enquiry.');
        return;
      }
      setDeleteOpen(false);
      router.replace('/admin/enquiries?deleted=1');
    } finally {
      setDeleteLoading(false);
    }
  }

  async function syncToGoogleSheets() {
    if (syncLoading) return;
    setSyncLoading(true);
    setNotice('');
    try {
      const response = await fetch(`/api/admin/enquiries/${id}/sync-google-sheets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const result = await response.json() as { ok?: boolean; error?: string; message?: string };
      if (!response.ok) {
        setNotice((result.error || result.message || 'Failed to sync to Google Sheets.'));
        return;
      }
      setNotice('Successfully synced to Google Sheets!');
      // Refresh the data
      const refreshResponse = await fetch(`/api/admin/enquiries/${id}`);
      if (refreshResponse.ok) {
        setData((await refreshResponse.json()).data);
      }
    } catch (error) {
      setNotice(error instanceof Error ? error.message : 'Failed to sync to Google Sheets.');
    } finally {
      setSyncLoading(false);
    }
  }

  async function downloadPdf() {
    if (pdfAction !== 'idle') return;
    setPdfAction('download');
    try {
      const response = await fetch(`/api/admin/enquiries/${id}/download`);
      if (!response.ok) throw new Error('Unable to download PDF.');
      const url = URL.createObjectURL(await response.blob());
      const link = document.createElement('a');
      link.href = url;
      link.download = `${data?.enquiry_number ?? 'enquiry'}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
      setNotice('PDF downloaded successfully.');
    } catch (error) {
      setNotice(error instanceof Error ? error.message : 'Unable to download PDF.');
    } finally {
      setPdfAction('idle');
    }
  }

  async function printPdf() {
    if (pdfAction !== 'idle') return;
    const printWindow = window.open('about:blank', '_blank');
    setPdfAction('print');
    try {
      const response = await fetch(`/api/admin/enquiries/${id}/pdf`);
      if (!response.ok) throw new Error('Unable to generate PDF.');
      const url = URL.createObjectURL(await response.blob());
      if (printWindow) printWindow.location.href = url;
      else window.open(url, '_blank');
      window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
      setNotice('PDF opened for printing.');
    } catch (error) {
      printWindow?.close();
      setNotice(error instanceof Error ? error.message : 'Unable to generate PDF.');
    } finally {
      setPdfAction('idle');
    }
  }

  if (!data) {
    return (
      <main className="admin-shell">
        <div className="container">
          <BookLoader text="Loading enquiry details" />
        </div>
      </main>
    );
  }

  return (
    <main className="admin-shell">
      <div className="container">
        <header className="admin-header">
          <div>
            <button className="back-button" onClick={() => router.back()}>← Back</button>
            <h1>{data.enquiry_number}</h1>
            <p className="admin-subtitle">
              Review the submitted information and generated form.
            </p>
          </div>
          <div className="admin-actions">
            <button className="ui-button ui-button-secondary" onClick={downloadPdf} disabled={pdfAction !== 'idle'}>
              {pdfAction === 'download' ? <BookLoader inline text="Downloading..." /> : 'Download PDF'}
            </button>
            <button className="ui-button ui-button-primary" onClick={printPdf} disabled={pdfAction !== 'idle'}>
              {pdfAction === 'print' ? <BookLoader inline text="Generating..." /> : 'Print PDF'}
            </button>
            <button
              disabled={syncLoading}
              onClick={syncToGoogleSheets}
              className="sync-button"
            >
              {syncLoading ? <BookLoader inline text="Syncing..." /> : 'Sync to Google Sheets'}
            </button>
            <button
              className="danger-button"
              disabled={deleteLoading}
              onClick={() => {
                setDeleteOpen(true);
                setDeleteText('');
              }}
            >
              Delete enquiry
            </button>
          </div>
        </header>

        {notice && <Toast message={notice} error={notice.toLowerCase().includes('unable') || notice.toLowerCase().includes('failed')} onClose={() => setNotice('')} />}

        {data.google_sheet_synced && data.google_sheet_synced_at && (
          <p className="sync-status">
            ✓ Synced to Google Sheets on {new Date(data.google_sheet_synced_at).toLocaleString()}
          </p>
        )}

        <div className="detail-layout">
          <div className="detail-sections">
            {groups.map(([heading, keys]) => (
              <section className="detail-card" key={heading}>
                <div className="detail-card-heading">
                  <span className="section-eyebrow">Submission record</span>
                  <h2>{heading}</h2>
                </div>
                <dl>
                  {keys
                    .filter(key => !hidden.has(key) && data[key] !== undefined)
                    .map(key => (
                      <div className="data-row" key={key}>
                        <dt>{labels[key] ?? key}</dt>
                        <dd>
                          {key === 'dob'
                            ? formatDob(data[key])
                            : key === 'created_at'
                            ? new Date(data[key] ?? '').toLocaleString()
                            : data[key] || 'Not provided'}
                        </dd>
                      </div>
                    ))}
                </dl>
              </section>
            ))}
          </div>
          <section className="pdf-panel">
            <div className="pdf-panel-heading">
              <span className="section-eyebrow">Document preview</span>
              <h2>Generated PDF</h2>
            </div>
            {pdfLoading && <p className="pdf-preview-loading-text" role="status">Loading PDF preview...</p>}
            <iframe
              title="Generated enquiry PDF"
              src={`/api/admin/enquiries/${id}/pdf`}
              onLoad={() => setPdfLoading(false)}
            />
          </section>
        </div>

        {deleteOpen && (
          <div className="modal-backdrop">
            <section
              className="question-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="delete-enquiry-title"
            >
              <h2 id="delete-enquiry-title">Delete enquiry?</h2>
              <p>
                This enquiry and its generated PDF will be permanently deleted. Type{' '}
                <strong>DELETE</strong> to confirm.
              </p>
              <input
                autoFocus
                value={deleteText}
                onChange={event => setDeleteText(event.target.value)}
                placeholder="Type DELETE"
                aria-label="Type DELETE to confirm"
              />
              <div className="dialog-actions">
                <button onClick={() => setDeleteOpen(false)} disabled={deleteLoading}>Cancel</button>
                <button
                  disabled={deleteText !== 'DELETE' || deleteLoading}
                  onClick={deleteEnquiry}
                  className="danger-button"
                >
                  {deleteLoading ? 'Deleting...' : 'Delete permanently'}
                </button>
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
