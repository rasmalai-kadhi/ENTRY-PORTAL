'use client';

import { useState } from 'react';
import { BookLoader } from '@/components/ui/BookLoader';
import { Toast } from '@/components/ui/Toast';

export function DocumentSettingsPreview() {
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState('');
  const [previewKey, setPreviewKey] = useState(Date.now());

  function refreshPreview() {
    setLoading(true);
    setPreviewKey(Date.now());
    setTimeout(() => {
      setLoading(false);
      setNotice('Preview updated.');
    }, 600);
  }

  function downloadSample() {
    const link = document.createElement('a');
    link.href = '/api/admin/pdf-mapping/preview';
    link.download = 'sample-computer-generated-bill.pdf';
    link.click();
    setNotice('Sample bill downloaded.');
  }

  function testPrint() {
    const printWindow = window.open('/api/admin/pdf-mapping/preview', '_blank');
    if (printWindow) {
      printWindow.focus();
      setNotice('Print preview opened in a new tab.');
    }
  }

  return (
    <section className="card document-preview-card" style={{ marginTop: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
        <div>
          <span className="section-eyebrow" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '11px', color: 'var(--muted, #64748b)', fontWeight: 600 }}>
            Automated Generation Engine
          </span>
          <h2 style={{ margin: '4px 0 8px', fontSize: '20px', fontWeight: 700, color: 'var(--foreground, #0f172a)' }}>
            Computer-Generated Bill &amp; Print Preview
          </h2>
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted, #64748b)', maxWidth: '640px', lineHeight: 1.5 }}>
            The system generates high-precision, computer-generated admission enquiry bills dynamically from code.
            No manual PDF templates or coordinate adjustments are required. Every standard field and dynamic question is formatted automatically for A4 print.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="ui-button ui-button-secondary"
            onClick={refreshPreview}
            disabled={loading}
            style={{ padding: '8px 14px', fontSize: '13px' }}
          >
            {loading ? <BookLoader inline text="Refreshing..." /> : 'Refresh Preview'}
          </button>
          <button
            type="button"
            className="ui-button ui-button-secondary"
            onClick={downloadSample}
            style={{ padding: '8px 14px', fontSize: '13px' }}
          >
            Download Sample Bill
          </button>
          <button
            type="button"
            className="ui-button ui-button-primary"
            onClick={testPrint}
            style={{ padding: '8px 14px', fontSize: '13px' }}
          >
            Test Print
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '20px' }}>
        <div style={{ padding: '12px 14px', borderRadius: '8px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <strong style={{ display: 'block', fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>Generation Engine</strong>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>100% Programmatic Vector (pdf-lib)</span>
        </div>
        <div style={{ padding: '12px 14px', borderRadius: '8px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <strong style={{ display: 'block', fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>Paper Standard</strong>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>ISO A4 (595.28 × 841.89 pt)</span>
        </div>
        <div style={{ padding: '12px 14px', borderRadius: '8px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <strong style={{ display: 'block', fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>Template Requirement</strong>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#16a34a' }}>None (Zero Manual Mapping)</span>
        </div>
        <div style={{ padding: '12px 14px', borderRadius: '8px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <strong style={{ display: 'block', fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>Dynamic Pagination</strong>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>Auto-Flow Multi-Page Support</span>
        </div>
      </div>

      <div
        style={{
          border: '1px solid #cbd5e1',
          borderRadius: '8px',
          overflow: 'hidden',
          background: '#475569',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06)',
          height: '750px',
          position: 'relative',
        }}
      >
        <iframe
          key={previewKey}
          title="Computer-generated bill live preview"
          src="/api/admin/pdf-mapping/preview"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>

      {notice && <Toast message={notice} onClose={() => setNotice('')} />}
    </section>
  );
}
