'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { PdfPreview } from '@/components/admin/PdfPreview';
import type { Enquiry } from '@/types/enquiry';
import type { PdfAlignment, PdfFieldMapping } from '@/types/pdf-mapping';

const fields = [
  ['date', 'Submission Date'], ['enquiryNumber', 'Enquiry ID'], ['course', 'Course'], ['name', 'Full Name'], ['dob', 'Date of Birth'], ['gender', 'Gender'],
  ['motherName', "Mother's Name"], ['fatherName', "Father's Name"], ['address', 'Address'], ['mobile1', 'Primary Mobile'], ['mobile2', 'Alternate Mobile'], ['email', 'Email'],
  ['class10Percent', 'Class 10 Percentage'], ['class12Stream', 'Class 12 Stream'], ['class12Percent', 'Class 12 Percentage'], ['physicsMarks', 'Physics Marks'], ['chemistryMarks', 'Chemistry Marks'], ['mathsMarks', 'Mathematics Marks'], ['biologyMarks', 'Biology Marks'], ['csMarks', 'Computer Science Marks'], ['schoolNameWithState', 'School Name and State'],
  ['neetUgScore', 'NEET UG Score'], ['neetPgScore', 'NEET PG Score'], ['category', 'Admission Category'], ['cuetScoreRank', 'CUET Score / Rank'], ['cetScoreRank', 'UG / PG CET Score / Rank'], ['clatScoreRank', 'CLAT Score / Rank'], ['catScoreRank', 'CAT Score / Percentile'], ['jeeMainsCrl', 'JEE Mains CRL'], ['percentile', 'Overall Percentile'], ['pcmPercent', 'PCM Percentage'], ['pcbPercent', 'PCB Percentage'], ['collegeUniversityName', 'College / University'], ['courses', 'Other Courses'], ['marks', 'Other Marks Information'], ['reference', 'How did you hear about us?'], ['signatureDataUrl', 'Signature'],
] as const;

type PdfInfo = { document: import('pdfjs-dist').PDFDocumentProxy; width: number; height: number; pageCount: number };
type Interaction = { id: string; mode: 'move' | 'resize'; startX: number; startY: number; original: PdfFieldMapping };

const sample: Enquiry = {
  enquiryNumber: 'ENQ-2026-0042', date: '21/08/2026', course: 'MBBS', name: 'Rahul Sharma', dob: '15/08/2005', gender: 'M',
  motherName: 'Sunita Sharma', fatherName: 'Rajesh Sharma', address: '42 Green Park, New Delhi, Delhi - 110016', mobile1: '9876543210', mobile2: '9812345678', email: 'rahul@example.com',
  class10Percent: '94%', class12Stream: 'Science', class12Percent: '91%', physicsMarks: '88', chemistryMarks: '92', mathsMarks: '95', biologyMarks: '90', csMarks: '87', schoolNameWithState: 'DPS RK Puram, Delhi',
  neetUgScore: '682', neetPgScore: 'N/A', category: 'General', cuetScoreRank: '98.4 percentile', cetScoreRank: 'N/A', clatScoreRank: 'N/A', catScoreRank: 'N/A', jeeMainsCrl: 'N/A', percentile: '98.4', pcmPercent: '92%', pcbPercent: '91%', collegeUniversityName: 'Delhi University', courses: 'NEET preparation', marks: 'Strong Biology', reference: 'Google search', signatureDataUrl: '',
};

function withId(mapping: PdfFieldMapping, index: number): PdfFieldMapping { return { ...mapping, id: mapping.id ?? `${mapping.field_key}-${index}` }; }
function cloneMappings(mappings: PdfFieldMapping[]) { return mappings.map(mapping => ({ ...mapping })); }

export function PdfMappingTestEditor({ initialMappings }: { initialMappings: PdfFieldMapping[] }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const interaction = useRef<Interaction | null>(null);
  const renderTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [pdf, setPdf] = useState<PdfInfo | null>(null);
  const [mappings, setMappings] = useState<PdfFieldMapping[]>([]);
  const [savedMappings, setSavedMappings] = useState<PdfFieldMapping[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [fitScale, setFitScale] = useState(1);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [notice, setNotice] = useState('');
  const [history, setHistory] = useState<PdfFieldMapping[][]>([]);
  const [future, setFuture] = useState<PdfFieldMapping[][]>([]);
  const [loading, setLoading] = useState(true);
  const scale = fitScale * zoom;
  const current = mappings.find(mapping => mapping.id === selectedId);

  useEffect(() => {
    let active = true;
    async function load() {
      const [pdfjs, templateResponse] = await Promise.all([
        import('pdfjs-dist/legacy/build/pdf.mjs'),
        fetch('/api/admin/pdf-template', { cache: 'no-store' }),
      ]);
      if (!templateResponse.ok) throw new Error('Unable to load the PDF mapping test.');
      const bytes = await templateResponse.arrayBuffer();
      pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
      const document = await pdfjs.getDocument({ data: bytes }).promise;
      const page = await document.getPage(1);
      const viewport = page.getViewport({ scale: 1 });
      const nextMappings = initialMappings.map(withId);
      if (!nextMappings.length) throw new Error('No saved PDF mappings found. Run the PDF mapping setup before opening this test page.');
      if (!active) return;
      setPdf({ document, width: viewport.width, height: viewport.height, pageCount: document.numPages });
      setFitScale(Math.min(1, Math.max(.35, ((stageRef.current?.clientWidth ?? 900) - 36) / viewport.width)));
      setMappings(cloneMappings(nextMappings));
      setSavedMappings(cloneMappings(nextMappings));
      setLoading(false);
    }
    load().catch(error => { if (active) { setNotice(error instanceof Error ? error.message : 'Unable to load editor.'); setLoading(false); } });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!mappings.length || !pdf) return;
    if (renderTimer.current) clearTimeout(renderTimer.current);
    renderTimer.current = setTimeout(async () => {
      const response = await fetch('/api/admin/pdf-mapping/preview', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ enquiry: sample, mappings }) });
      if (!response.ok) { setNotice('Preview generation failed.'); return; }
      const nextUrl = URL.createObjectURL(await response.blob());
      setPreviewUrl(previous => { if (previous) URL.revokeObjectURL(previous); return nextUrl; });
    }, 180);
    return () => { if (renderTimer.current) clearTimeout(renderTimer.current); };
  }, [mappings, pdf]);

  function snapshot() { setHistory(previous => [...previous.slice(-29), cloneMappings(mappings)]); setFuture([]); }
  function updateMapping(id: string, patch: Partial<PdfFieldMapping>) { snapshot(); setMappings(previous => previous.map(mapping => mapping.id === id ? { ...mapping, ...patch } : mapping)); }
  function pointerStart(event: React.PointerEvent, mapping: PdfFieldMapping, mode: Interaction['mode']) {
    event.stopPropagation(); if (mode === 'move') snapshot(); setSelectedId(mapping.id!); interaction.current = { id: mapping.id!, mode, startX: event.clientX, startY: event.clientY, original: { ...mapping } }; (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  }
  function pointerMove(event: React.PointerEvent) {
    const active = interaction.current; if (!active || !pdf) return;
    const dx = (event.clientX - active.startX) / scale; const dy = (event.clientY - active.startY) / scale; const original = active.original;
    setMappings(previous => previous.map(mapping => {
      if (mapping.id !== active.id) return mapping;
      if (active.mode === 'move') return { ...mapping, x: Math.max(0, Math.min(pdf.width - mapping.width, original.x + dx)), y: Math.max(0, Math.min(pdf.height - mapping.height, original.y - dy)) };
      return { ...mapping, width: Math.max(8, Math.min(pdf.width - original.x, original.width + dx)), height: Math.max(8, Math.min(pdf.height - original.y, original.height - dy)), y: Math.max(0, original.y - dy) };
    }));
  }
  function undo() { const previous = history.at(-1); if (!previous) return; setFuture(next => [cloneMappings(mappings), ...next]); setMappings(cloneMappings(previous)); setHistory(history.slice(0, -1)); }
  function redo() { const next = future[0]; if (!next) return; setHistory(previous => [...previous, cloneMappings(mappings)]); setMappings(cloneMappings(next)); setFuture(future.slice(1)); }
  async function save() { const response = await fetch('/api/admin/pdf-mappings', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mappings }) }); if (!response.ok) { setNotice('Could not save mappings.'); return; } const refreshedResponse = await fetch('/api/admin/pdf-mappings', { cache: 'no-store' }); const refreshed = await refreshedResponse.json() as { data?: PdfFieldMapping[] }; const nextMappings = (refreshed.data ?? []).map(withId); setMappings(cloneMappings(nextMappings)); setSavedMappings(cloneMappings(nextMappings)); setNotice('Mappings saved to Supabase and preview refreshed.'); }
  function resetSaved() { snapshot(); setMappings(cloneMappings(savedMappings)); setSelectedId(null); }
  function resetDefaults() { snapshot(); setMappings(cloneMappings(savedMappings)); setSelectedId(null); setNotice('Reset to the current saved Supabase mappings.'); }
  async function changePage(next: number) { if (!pdf || next < 1 || next > pdf.pageCount) return; const page = await pdf.document.getPage(next); const viewport = page.getViewport({ scale: 1 }); setPdf({ ...pdf, width: viewport.width, height: viewport.height }); setPageNumber(next); setSelectedId(null); }
  function changeNumber(key: keyof PdfFieldMapping, value: string) { if (!current) return; const number = Number(value); if (Number.isFinite(number)) updateMapping(current.id!, { [key]: number }); }

  if (loading) return <main className="mapping-editor-page"><div className="mapping-loading">Loading PDF mapping test...</div></main>;
  const pageMappings = mappings.filter(mapping => mapping.page_number === pageNumber);
  return <main className="mapping-editor-page">
    <header className="mapping-toolbar"><div><Link className="back-link" href="/admin">← Dashboard</Link><div className="dev-badge">TEST / DEVELOPMENT</div><h1>PDF mapping calibration</h1><p>Changes are preview-only until you explicitly save mappings.</p></div><div className="mapping-toolbar-actions"><button className="btn-secondary" onClick={undo} disabled={!history.length}>Undo</button><button className="btn-secondary" onClick={redo} disabled={!future.length}>Redo</button><button className="btn-secondary" onClick={resetSaved}>Reset</button><button className="btn-secondary" onClick={resetDefaults}>Reset all</button><button className="btn-primary" onClick={save}>Save mapping</button></div></header>
    {notice && <div className="mapping-notice">{notice}</div>}
    <div className="mapping-layout">
      <aside className="mapping-sidebar mapping-fields"><div className="mapping-sidebar-heading"><span className="section-eyebrow">Sample enquiry</span><h2>Rahul Sharma</h2><p>Fixed data only. This page never creates an enquiry or uploads a file.</p></div><div className="sample-data">{Object.entries(sample).filter(([key, value]) => key !== 'signatureDataUrl' && value).map(([key, value]) => <div key={key}><small>{key}</small><span>{String(value)}</span></div>)}</div></aside>
      <section className="mapping-workspace"><div className="mapping-view-toolbar"><button onClick={() => setZoom(Math.max(.5, zoom - .1))}>−</button><span>{Math.round(scale * 100)}%</span><button onClick={() => setZoom(Math.min(3, zoom + .1))}>+</button><button onClick={() => setZoom(1)}>Fit to page</button><span className="page-controls"><button disabled={pageNumber === 1} onClick={() => changePage(pageNumber - 1)}>←</button> Page {pageNumber} of {pdf?.pageCount ?? '...'} <button disabled={!pdf || pageNumber === pdf.pageCount} onClick={() => changePage(pageNumber + 1)}>→</button></span></div><div className="mapping-stage-scroll"><div className="mapping-stage" ref={stageRef} style={{ width: (pdf?.width ?? 0) * scale, height: (pdf?.height ?? 0) * scale }}><PdfPreview url={previewUrl} pageNumber={pageNumber} width={(pdf?.width ?? 0) * scale} height={(pdf?.height ?? 0) * scale} />{pageMappings.map(mapping => <div key={mapping.id} className={`mapping-rect${mapping.id === selectedId ? ' selected' : ''}`} style={{ left: mapping.x * scale, top: (pdf!.height - mapping.y - mapping.height) * scale, width: mapping.width * scale, height: mapping.height * scale, color: mapping.color }} onPointerDown={event => pointerStart(event, mapping, 'move')} onPointerMove={pointerMove} onPointerUp={() => { interaction.current = null; }}><span>{mapping.field_label}</span>{mapping.id === selectedId && <button className="mapping-resize-handle" aria-label="Resize mapping" onPointerDown={event => pointerStart(event, mapping, 'resize')} />}</div>)}</div></div></section>
      <aside className="mapping-sidebar mapping-properties"><div className="mapping-sidebar-heading"><span className="section-eyebrow">Field controls</span><h2>{current?.field_label ?? 'Select a field'}</h2></div>{current ? <div className="mapping-form"><label>Field<select value={current.field_key} onChange={event => { const found = mappings.find(mapping => mapping.field_key === event.target.value); if (found) setSelectedId(found.id!); }}>{fields.map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label><label>Page<input type="number" min="1" max={pdf?.pageCount} value={current.page_number} onChange={event => changeNumber('page_number', event.target.value)} /></label><label>X<input type="number" value={current.x} onChange={event => changeNumber('x', event.target.value)} /></label><label>Y<input type="number" value={current.y} onChange={event => changeNumber('y', event.target.value)} /></label><label>Width<input type="number" value={current.width} onChange={event => changeNumber('width', event.target.value)} /></label><label>Height<input type="number" value={current.height} onChange={event => changeNumber('height', event.target.value)} /></label><label>Font size<input type="number" min="1" value={current.font_size} onChange={event => changeNumber('font_size', event.target.value)} /></label><label>Alignment<select value={current.alignment} onChange={event => updateMapping(current.id!, { alignment: event.target.value as PdfAlignment })}><option value="left">Left</option><option value="center">Center</option><option value="right">Right</option></select></label><label>Color<input type="color" value={current.color} onChange={event => updateMapping(current.id!, { color: event.target.value })} /></label><label className="mapping-checkbox"><input type="checkbox" checked={current.multiline} onChange={event => updateMapping(current.id!, { multiline: event.target.checked })} /> Multiline</label></div> : <p className="mapping-empty">Click a field rectangle in the preview to edit its position.</p>}</aside>
    </div>
  </main>;
}
