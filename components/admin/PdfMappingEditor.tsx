'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import type { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist';
import type { PdfAlignment, PdfFieldMapping } from '@/types/pdf-mapping';
import { Toast } from '@/components/ui/Toast';

const fields = [
  ['date', 'Submission Date'], ['enquiryNumber', 'Enquiry ID'], ['course', 'Course'], ['name', 'Full Name'], ['dob', 'Date of Birth'], ['gender', 'Gender'],
  ['motherName', "Mother's Name"], ['fatherName', "Father's Name"], ['address', 'Address'], ['mobile1', 'Primary Mobile'], ['mobile2', 'Alternate Mobile'], ['email', 'Email'],
  ['class10Percent', 'Class 10 Percentage'], ['class12Stream', 'Class 12 Stream'], ['class12Percent', 'Class 12 Percentage'], ['physicsMarks', 'Physics Marks'], ['chemistryMarks', 'Chemistry Marks'], ['mathsMarks', 'Mathematics Marks'], ['biologyMarks', 'Biology Marks'], ['csMarks', 'Computer Science Marks'], ['schoolNameWithState', 'School Name and State'],
  ['neetUgScore', 'NEET UG Score'], ['neetPgScore', 'NEET PG Score'], ['category', 'Admission Category'], ['cuetScoreRank', 'CUET Score / Rank'], ['cetScoreRank', 'UG / PG CET Score / Rank'], ['clatScoreRank', 'CLAT Score / Rank'], ['catScoreRank', 'CAT Score / Percentile'], ['jeeMainsCrl', 'JEE Mains CRL'], ['percentile', 'Overall Percentile'], ['pcmPercent', 'PCM Percentage'], ['pcbPercent', 'PCB Percentage'], ['collegeUniversityName', 'College / University'], ['courses', 'Other Courses'], ['marks', 'Other Marks Information'], ['reference', 'How did you hear about us?'], ['signatureDataUrl', 'Signature'],
] as const;
const fieldMap = new Map(fields);
type PdfState = { document: PDFDocumentProxy; page: PDFPageProxy; width: number; height: number; pageCount: number };
type Interaction = { id: string; mode: 'move' | 'resize'; startX: number; startY: number; original: PdfFieldMapping };

function makeMapping(fieldKey: string, pageWidth: number, pageHeight: number, x = 40, y = 40): PdfFieldMapping {
  const label = fieldMap.get(fieldKey as (typeof fields)[number][0]) ?? fieldKey;
  return { template_id: 'entry-form', field_key: fieldKey, field_label: label, page_number: 1, x: Math.max(0, Math.min(pageWidth - 8, x)), y: Math.max(0, pageHeight - y - 24), width: Math.max(8, Math.min(220, pageWidth - x - 20)), height: fieldKey === 'address' ? 50 : 24, font_size: 10, font_family: 'Helvetica', alignment: 'left', color: '#000000', multiline: fieldKey === 'address', rotation: 0 };
}

export function PdfMappingEditor() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [pdf, setPdf] = useState<PdfState | null>(null);
  const [mappings, setMappings] = useState<PdfFieldMapping[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [fitScale, setFitScale] = useState(1);
  const [notice, setNotice] = useState('');
  const [history, setHistory] = useState<PdfFieldMapping[][]>([]);
  const [future, setFuture] = useState<PdfFieldMapping[][]>([]);
  const [placingField, setPlacingField] = useState<string | null>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteText, setDeleteText] = useState('');
  const [saving, setSaving] = useState(false);
  const interaction = useRef<Interaction | null>(null);

  const current = selectedId ? mappings.find(mapping => mapping.id === selectedId) : undefined;
  const scale = fitScale * zoom;

  useEffect(() => {
    let active = true;
    async function loadEditor() {
      const sessionResponse = await fetch('/api/admin/session', { cache: 'no-store', credentials: 'include' });
      const session = await sessionResponse.json().catch(() => ({})) as { authenticated?: boolean };
      if (!sessionResponse.ok || !session.authenticated) {
        window.location.href = '/admin/login?next=/admin/settings';
        throw new Error('Your admin session has expired. Please sign in again.');
      }

      const [pdfjs, mappingsResponse] = await Promise.all([
        import('pdfjs-dist/legacy/build/pdf.mjs'),
        fetch('/api/admin/pdf-mappings', { cache: 'no-store', credentials: 'include' }),
      ]);
      pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
      if (mappingsResponse.status === 401) {
        window.location.href = '/admin/login?next=/admin/settings';
        throw new Error('Your admin session has expired. Please sign in again.');
      }
      if (!mappingsResponse.ok) throw new Error('Unable to load saved PDF mappings.');
      const result = await mappingsResponse.json() as { data?: PdfFieldMapping[] };
      if (!active) return;
      const templateResponse = await fetch('/api/admin/pdf-template', { cache: 'no-store', credentials: 'include' });
      if (templateResponse.status === 401) {
        window.location.href = '/admin/login?next=/admin/settings';
        throw new Error('Your admin session has expired. Please sign in again.');
      }
      if (!templateResponse.ok) throw new Error(`Template request failed (${templateResponse.status}).`);
      const templateBytes = await templateResponse.arrayBuffer();
      const document = await pdfjs.getDocument({ data: templateBytes, disableAutoFetch: false }).promise;
      const page = await document.getPage(1);
      const viewport = page.getViewport({ scale: 1 });
      const hostWidth = stageRef.current?.clientWidth ?? 900;
      const nextFit = Math.min(1, Math.max(.35, (hostWidth - 40) / viewport.width));
      setFitScale(nextFit);
      setPdf({ document, page, width: viewport.width, height: viewport.height, pageCount: document.numPages });
      setMappings((result.data ?? []).map((mapping: PdfFieldMapping) => ({ ...mapping, id: mapping.id ?? `${mapping.field_key}-${mapping.page_number}` })));
    }
    loadEditor().catch((error: unknown) => {
      if (active && error instanceof Error && !error.message.includes('session has expired')) setNotice(error.message);
    });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!pdf || !canvasRef.current) return;
    const viewport = pdf.page.getViewport({ scale });
    const canvas = canvasRef.current;
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    canvas.style.width = `${viewport.width}px`;
    canvas.style.height = `${viewport.height}px`;
    pdf.page.render({ canvas, canvasContext: canvas.getContext('2d')!, viewport });
  }, [pdf, scale]);

  async function changePage(nextPage: number) {
    if (!pdf || nextPage < 1 || nextPage > pdf.pageCount) return;
    const page = await pdf.document.getPage(nextPage);
    const viewport = page.getViewport({ scale: 1 });
    setPdf({ ...pdf, page, width: viewport.width, height: viewport.height });
    setPageNumber(nextPage);
    setSelectedId(null);
  }

  function snapshot() {
    setHistory(previous => [...previous.slice(-29), mappings]);
    setFuture([]);
  }

  function updateMapping(id: string, patch: Partial<PdfFieldMapping>) {
    snapshot();
    setMappings(previous => previous.map(mapping => mapping.id === id ? { ...mapping, ...patch } : mapping));
  }

  function placeField(fieldKey: string, x = 40, y = 40) {
    if (!pdf || mappings.some(mapping => mapping.field_key === fieldKey)) return;
    snapshot();
    const mapping = { ...makeMapping(fieldKey, pdf.width, pdf.height, x, y), id: `${fieldKey}-${Date.now()}`, page_number: pageNumber };
    setMappings(previous => [...previous, mapping]);
    setSelectedId(mapping.id);
    setPlacingField(null);
  }

  function pointerStart(event: React.PointerEvent, mapping: PdfFieldMapping, mode: Interaction['mode']) {
    event.stopPropagation();
    if (mode === 'move') snapshot();
    setSelectedId(mapping.id!);
    interaction.current = { id: mapping.id!, mode, startX: event.clientX, startY: event.clientY, original: { ...mapping } };
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  }

  function pointerMove(event: React.PointerEvent) {
    const active = interaction.current;
    if (!active || !pdf) return;
    const dx = (event.clientX - active.startX) / scale;
    const dy = (event.clientY - active.startY) / scale;
    const original = active.original;
    setMappings(previous => previous.map(mapping => {
      if (mapping.id !== active.id) return mapping;
      if (active.mode === 'move') return { ...mapping, x: Math.max(0, Math.min(pdf.width - mapping.width, original.x + dx)), y: Math.max(0, Math.min(pdf.height - mapping.height, original.y - dy)) };
      return { ...mapping, width: Math.max(8, Math.min(pdf.width - original.x, original.width + dx)), height: Math.max(8, Math.min(pdf.height - original.y, original.height - dy)), y: Math.max(0, original.y - dy) };
    }));
  }

  function pointerEnd() { interaction.current = null; }

  function undo() { const previous = history.at(-1); if (!previous) return; setFuture(futureState => [mappings, ...futureState]); setMappings(previous); setHistory(history.slice(0, -1)); setSelectedId(null); }
  function redo() { const next = future[0]; if (!next) return; setHistory(previous => [...previous, mappings]); setMappings(next); setFuture(future.slice(1)); }
  async function save() {
    setSaving(true);
    try {
      const response = await fetch('/api/admin/pdf-mappings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mappings }),
      });
      setNotice(response.ok ? 'Mappings saved.' : 'Could not save mappings.');
      setTimeout(() => setNotice(''), 3000);
    } finally {
      setSaving(false);
    }
  }
  function reset() { snapshot(); setMappings([]); setSelectedId(null); }
  function requestDelete() { setDeleteText(''); setDeleteOpen(true); }
  function confirmDelete() { if (deleteText !== 'DELETE' || !current) return; snapshot(); setMappings(previous => previous.filter(mapping => mapping.id !== current.id)); setSelectedId(null); setDeleteOpen(false); }

  const pageMappings = mappings.filter(mapping => mapping.page_number === pageNumber);
  return <main className="mapping-editor-page">
    <header className="mapping-toolbar">
      <div><button className="back-button" onClick={() => router.back()}>← Back</button><h1>PDF field mapping</h1><p>Place submitted values on the original entry form.</p></div>
      <div className="mapping-toolbar-actions"><button className="btn-secondary" onClick={undo} disabled={!history.length}>Undo</button><button className="btn-secondary" onClick={redo} disabled={!future.length}>Redo</button><button className="btn-secondary" onClick={reset} disabled={saving}>Reset</button><button className="btn-primary" onClick={save} disabled={saving}>{saving ? 'Saving...' : 'Save mappings'}</button></div>
    </header>
    {notice && <Toast message={notice} onClose={() => setNotice('')} />}
    <div className="mapping-layout">
      <aside className="mapping-sidebar mapping-fields"><div className="mapping-sidebar-heading"><span className="section-eyebrow">Available fields</span><h2>Form fields</h2><p>{placingField ? 'Click or drop this field on the PDF.' : 'Click a field, then place it on the current page.'}</p></div><div className="field-palette">{fields.map(([key, label]) => <button key={key} draggable={!mappings.some(mapping => mapping.field_key === key)} disabled={mappings.some(mapping => mapping.field_key === key)} onDragStart={() => setPlacingField(key)} onClick={() => setPlacingField(key)}><span>{label}</span><small>{mappings.some(mapping => mapping.field_key === key) ? 'Placed' : placingField === key ? 'Place' : 'Add'}</small></button>)}</div></aside>
      <section className="mapping-workspace"><div className="mapping-view-toolbar"><button onClick={() => setZoom(Math.max(.5, zoom - .1))}>−</button><span>{Math.round(scale * 100)}%</span><button onClick={() => setZoom(Math.min(3, zoom + .1))}>+</button><button onClick={() => setZoom(1)}>Fit to page</button><span className="page-controls"><button disabled={pageNumber === 1} onClick={() => changePage(pageNumber - 1)}>←</button> Page {pageNumber} of {pdf?.pageCount ?? '...'} <button disabled={!pdf || pageNumber === pdf.pageCount} onClick={() => changePage(pageNumber + 1)}>→</button></span></div><div className="mapping-stage-scroll"><div className={`mapping-stage${placingField ? ' placing' : ''}`} ref={stageRef} onDragOver={event => event.preventDefault()} onDrop={event => { event.preventDefault(); if (!placingField || !pdf) return; const rect = event.currentTarget.getBoundingClientRect(); placeField(placingField, (event.clientX - rect.left) / scale, (event.clientY - rect.top) / scale); }} onClick={event => { if (placingField && pdf) { const rect = event.currentTarget.getBoundingClientRect(); placeField(placingField, (event.clientX - rect.left) / scale, (event.clientY - rect.top) / scale); } else if (event.target === event.currentTarget) setSelectedId(null); }}><canvas ref={canvasRef} />{pageMappings.map(mapping => <div key={mapping.id} className={`mapping-rect${mapping.id === selectedId ? ' selected' : ''}`} style={{ left: mapping.x * scale, top: (pdf ? pdf.height - mapping.y - mapping.height : 0) * scale, width: mapping.width * scale, height: mapping.height * scale, color: mapping.color, transform: `rotate(${mapping.rotation}deg)` }} onPointerDown={event => pointerStart(event, mapping, 'move')} onPointerMove={pointerMove} onPointerUp={pointerEnd}><span>{mapping.field_label}</span>{mapping.id === selectedId && <button className="mapping-resize-handle" aria-label="Resize mapping" onPointerDown={event => pointerStart(event, mapping, 'resize')} />}</div>)}</div></div></section>
      <aside className="mapping-sidebar mapping-properties"><div className="mapping-sidebar-heading"><span className="section-eyebrow">Selected field</span><h2>{current?.field_label ?? 'No field selected'}</h2></div>{current ? <div className="mapping-form"><label>X<input type="number" value={current.x.toFixed(2)} onChange={event => updateMapping(current.id!, { x: Number(event.target.value) })} /></label><label>Y<input type="number" value={current.y.toFixed(2)} onChange={event => updateMapping(current.id!, { y: Number(event.target.value) })} /></label><label>Width<input type="number" value={current.width.toFixed(2)} onChange={event => updateMapping(current.id!, { width: Number(event.target.value) })} /></label><label>Height<input type="number" value={current.height.toFixed(2)} onChange={event => updateMapping(current.id!, { height: Number(event.target.value) })} /></label><label>Font size<input type="number" min="1" value={current.font_size} onChange={event => updateMapping(current.id!, { font_size: Number(event.target.value) })} /></label><label>Font family<select value={current.font_family} onChange={event => updateMapping(current.id!, { font_family: event.target.value })}><option>Helvetica</option><option>Times-Roman</option><option>Courier</option></select></label><label>Alignment<select value={current.alignment} onChange={event => updateMapping(current.id!, { alignment: event.target.value as PdfAlignment })}><option value="left">Left</option><option value="center">Center</option><option value="right">Right</option></select></label><label>Color<input type="color" value={current.color} onChange={event => updateMapping(current.id!, { color: event.target.value })} /></label><label>Rotation<input type="number" value={current.rotation} onChange={event => updateMapping(current.id!, { rotation: Number(event.target.value) })} /></label><label className="mapping-checkbox"><input type="checkbox" checked={current.multiline} onChange={event => updateMapping(current.id!, { multiline: event.target.checked })} /> Multiline text</label><div className="mapping-property-actions"><button className="btn-secondary" onClick={() => { const copy = { ...current, id: `${current.field_key}-${Date.now()}`, x: current.x + 10, y: current.y - 10 }; snapshot(); setMappings(previous => [...previous, copy]); setSelectedId(copy.id); }}>Duplicate</button><button className="danger-button" onClick={requestDelete}>Delete</button></div></div> : <p className="mapping-empty">Select a rectangle on the page to edit its exact PDF coordinates.</p>}</aside>
    </div>
    {deleteOpen && <div className="modal-backdrop"><section className="question-dialog" role="dialog" aria-modal="true" aria-labelledby="delete-mapping-title"><h2 id="delete-mapping-title">Delete PDF mapping?</h2><p>This mapping will be permanently deleted when you save mappings. Type <strong>DELETE</strong> to confirm.</p><input autoFocus value={deleteText} onChange={event => setDeleteText(event.target.value)} placeholder="Type DELETE" aria-label="Type DELETE to confirm" /><div className="dialog-actions"><button type="button" onClick={() => setDeleteOpen(false)}>Cancel</button><button type="button" className="danger-button" disabled={deleteText !== 'DELETE'} onClick={confirmDelete}>Delete</button></div></section></div>}
  </main>;
}
