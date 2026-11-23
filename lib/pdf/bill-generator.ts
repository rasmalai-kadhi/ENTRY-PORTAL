import fs from 'node:fs/promises';
import path from 'node:path';
import { PDFDocument, rgb, StandardFonts, type PDFFont, type PDFImage, type PDFPage } from 'pdf-lib';
import type { Enquiry } from '@/types/enquiry';
import { formatDob } from '@/lib/enquiry/dob';

export interface BillGeneratorOptions {
  includeAuditTrail?: boolean;
  generatedAt?: Date;
  institutionName?: string;
  tagline?: string;
  contactEmail?: string;
  contactPhone?: string;
  website?: string;
}

// ── A4 Geometry ───────────────────────────────────────────────────────────────
const PW  = 595.28;
const PH  = 841.89;
const ML  = 36;           // Left margin
const MR  = 36;           // Right margin
const CW  = PW - ML - MR; // Usable content width (523.28 pt)

// Fixed vertical boundaries
const FOOTER_BOT = 16;
const FOOTER_TOP = 38;

// ── Colors ────────────────────────────────────────────────────────────────────
const C_BLACK = rgb(0, 0, 0);            // Pure black for titles, keys, rules
const C_BLUE  = rgb(0.10, 0.35, 0.82);   // Clear blue for values (#1a59d1)
const C_BODY  = rgb(0.10, 0.10, 0.10);   // Dark readable body text
const C_MUTED = rgb(0.42, 0.42, 0.42);   // Medium gray for captions & secondary labels
const C_LINE  = rgb(0.80, 0.82, 0.85);   // Hairline grid dividers
const C_SHADE = rgb(0.965, 0.97, 0.98); // Very subtle zebra row background

// ── Helpers ───────────────────────────────────────────────────────────────────
function san(s: string | undefined | null): string {
  if (!s) return '';
  return s
    .replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, '-').replace(/\u2022/g, '-')
    .replace(/[^\x20-\x7E\xA0-\xFF]/g, ' ').trim();
}

function wordWrap(text: string, font: PDFFont, size: number, maxW: number): string[] {
  const s = san(text);
  if (!s) return ['—'];
  const words = s.split(/\s+/);
  const out: string[] = [];
  let cur = '';
  for (const w of words) {
    const cand = cur ? `${cur} ${w}` : w;
    if (cur && font.widthOfTextAtSize(cand, size) > maxW) { out.push(cur); cur = w; }
    else cur = cand;
  }
  if (cur) out.push(cur);
  return out.length ? out : ['—'];
}

function clamp(text: string, font: PDFFont, size: number, maxW: number): string {
  const s = san(text);
  if (!s) return '—';
  if (font.widthOfTextAtSize(s, size) <= maxW) return s;
  let t = s;
  while (t.length > 3 && font.widthOfTextAtSize(`${t}...`, size) > maxW) t = t.slice(0, -1);
  return `${t}...`;
}

// ══════════════════════════════════════════════════════════════════════════════
export async function generateComputerGeneratedBill(
  enquiry: Enquiry,
  options: BillGeneratorOptions = {}
): Promise<Uint8Array> {

  const doc  = await PDFDocument.create();
  const BOLD = await doc.embedFont(StandardFonts.HelveticaBold);
  const REG  = await doc.embedFont(StandardFonts.Helvetica);

  let logo: PDFImage | null = null;
  try {
    logo = await doc.embedPng(await fs.readFile(path.join(process.cwd(), 'public', 'images', 'logo.png')));
  } catch { logo = null; }

  let sig: PDFImage | null = null;
  if (enquiry.signatureDataUrl?.startsWith('data:image/')) {
    try {
      const [, mime, b64] = enquiry.signatureDataUrl.match(/^data:(image\/(?:png|jpeg));base64,(.+)$/) ?? [];
      if (mime && b64) {
        const buf = Buffer.from(b64, 'base64');
        sig = mime === 'image/png' ? await doc.embedPng(buf) : await doc.embedJpg(buf);
      }
    } catch { sig = null; }
  }

  const genDate = options.generatedAt ?? new Date();
  const dateStr = san(enquiry.date) || genDate.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const timeStr = genDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false });
  const refNo   = san(enquiry.enquiryNumber) || 'DRAFT';

  // ── Pages ─────────────────────────────────────────────────────────────────
  const pages: PDFPage[] = [];
  let pg = doc.addPage([PW, PH]);
  pages.push(pg);
  let cursor = PH - 110;

  function newPage(): void {
    pg = doc.addPage([PW, PH]);
    pages.push(pg);
    cursor = PH - 24;
  }

  function ensureSpace(h: number): void {
    if (cursor - h < FOOTER_TOP) newPage();
  }

  function T(s: string, x: number, y: number, sz: number, font: PDFFont, color = C_BODY): void {
    if (s) pg.drawText(s, { x, y, size: sz, font, color });
  }

  function HL(y: number, thick = 0.35, color = C_LINE): void {
    pg.drawLine({ start: { x: ML, y }, end: { x: PW - MR, y }, thickness: thick, color });
  }

  // ── Layout primitives ─────────────────────────────────────────────────────

  function section(title: string): void {
    ensureSpace(34);
    cursor -= 14; // Generous gap above section heading prevents overlap
    T(title.toUpperCase(), ML + 2, cursor, 7.5, BOLD, C_BLACK);
    cursor -= 4;
    HL(cursor, 0.6, C_BLACK); // Clean underline below section title
    cursor -= 6; // Space before first data row
  }

  const ROW_H  = 25;
  const CAP_SZ = 6;
  const VAL_SZ = 8.5;

  function row2(c1: string, v1: string, c2: string, v2: string, shade = false): void {
    ensureSpace(ROW_H);
    const top = cursor;
    if (shade) {
      pg.drawRectangle({ x: ML, y: top - ROW_H, width: CW, height: ROW_H, color: C_SHADE });
    }
    const col2X = ML + CW / 2 + 10;
    const maxValW = CW / 2 - 20;

    // Col 1: Key in black, Value in blue
    T(san(c1), ML + 4, top - 8.5, CAP_SZ, BOLD, C_BLACK);
    T(clamp(v1 || '—', BOLD, VAL_SZ, maxValW), ML + 4, top - 19, VAL_SZ, BOLD, C_BLUE);

    // Col 2: Key in black, Value in blue
    if (c2) {
      T(san(c2), col2X, top - 8.5, CAP_SZ, BOLD, C_BLACK);
      T(clamp(v2 || '—', BOLD, VAL_SZ, maxValW), col2X, top - 19, VAL_SZ, BOLD, C_BLUE);
    }

    // Bottom hairline rule
    HL(top - ROW_H, 0.35, C_LINE);
    cursor = top - ROW_H;
  }

  function row1(c: string, v: string, shade = false): void {
    const lines = wordWrap(v || '—', BOLD, VAL_SZ, CW - 12);
    const lineH = 10.5;
    const totalH = Math.max(ROW_H, 11 + lines.length * lineH + 4);
    ensureSpace(totalH);
    const top = cursor;
    if (shade) {
      pg.drawRectangle({ x: ML, y: top - totalH, width: CW, height: totalH, color: C_SHADE });
    }
    // Key in black, Value in blue
    T(san(c), ML + 4, top - 8.5, CAP_SZ, BOLD, C_BLACK);
    lines.forEach((ln, i) => {
      T(ln, ML + 4, top - 19 - i * lineH, VAL_SZ, BOLD, C_BLUE);
    });
    HL(top - totalH, 0.35, C_LINE);
    cursor = totalH ? top - totalH : cursor;
  }

  // ── Academic table ────────────────────────────────────────────────────────
  const ACOL = [ML + 4, ML + 175, ML + 380];
  const TH_H = 17;
  const TR_H = 17;

  function tHead(): void {
    ensureSpace(TH_H + 2);
    const top = cursor;
    pg.drawRectangle({ x: ML, y: top - TH_H, width: CW, height: TH_H, color: C_SHADE });
    T('Examination',                   ACOL[0], top - 11.5, 6.5, BOLD, C_BLACK);
    T('Stream / School / Institution', ACOL[1], top - 11.5, 6.5, BOLD, C_BLACK);
    T('Result',                        ACOL[2], top - 11.5, 6.5, BOLD, C_BLACK);
    HL(top - TH_H, 0.5, C_BLACK);
    cursor = top - TH_H;
  }

  function tRow(exam: string, detail: string, result: string, shade: boolean): void {
    ensureSpace(TR_H);
    const top = cursor;
    if (shade) {
      pg.drawRectangle({ x: ML, y: top - TR_H, width: CW, height: TR_H, color: C_SHADE });
    }
    // Category/exam in black, detail and result in blue
    T(clamp(exam,   BOLD, 8, 160), ACOL[0], top - 12, 8, BOLD, C_BLACK);
    T(clamp(detail, REG, 8, 195),  ACOL[1], top - 12, 8, REG, C_BLUE);
    T(clamp(result, BOLD, 8, 130), ACOL[2], top - 12, 8, BOLD, C_BLUE);
    HL(top - TR_H, 0.35, C_LINE);
    cursor = top - TR_H;
  }

  // ══════════════════════════════════════════════════════════════════════════
  //  PAGE 1 HEADER: Centered & Bigger Logo + Clean Header Bar
  // ══════════════════════════════════════════════════════════════════════════
  const logoH = 46; // Bigger logo
  if (logo) {
    const logoW = (logo.width / logo.height) * logoH;
    const logoX = (PW - logoW) / 2; // Perfectly centered
    pg.drawImage(logo, { x: logoX, y: PH - 14 - logoH, width: logoW, height: logoH });
  } else {
    const brandName = 'EDUSPRAY INDIA PVT. LTD.';
    const bnW = BOLD.widthOfTextAtSize(brandName, 13);
    T(brandName, (PW - bnW) / 2, PH - 24, 13, BOLD, C_BLACK);
    const brandSub = 'Education Support Services';
    const bsW = REG.widthOfTextAtSize(brandSub, 7.5);
    T(brandSub, (PW - bsW) / 2, PH - 36, 7.5, REG, C_MUTED);
  }

  // Divider under the centered logo
  const r1y = PH - 14 - logoH - 8;
  pg.drawLine({ start: { x: ML, y: r1y }, end: { x: PW - MR, y: r1y }, thickness: 0.6, color: C_LINE });

  // Sub-header block: Title on Left, Key-Value Pairs on Right
  const blockTop = r1y - 6;
  const rightColX = PW - MR - 175;

  // Left: Document title + candidate name/course
  T('CANDIDATE ENQUIRY', ML + 4, blockTop - 10, 10.5, BOLD, C_BLACK);
  const candName = san(enquiry.name) || 'Candidate';
  const candCourse = san(enquiry.course) || 'Course not specified';
  const cLabel = 'Candidate: ';
  T(cLabel, ML + 4, blockTop - 21, 7.5, BOLD, C_BLACK);
  const clW = BOLD.widthOfTextAtSize(cLabel, 7.5);
  T(candName, ML + 4 + clW, blockTop - 21, 7.5, BOLD, C_BLUE);
  const cnW = BOLD.widthOfTextAtSize(candName, 7.5);
  const courseStr = `  |  ${candCourse}`;
  T(clamp(courseStr, REG, 7.5, rightColX - (ML + 4 + clW + cnW) - 10), ML + 4 + clW + cnW, blockTop - 21, 7.5, REG, C_MUTED);

  // Right: Key in black, Value in blue
  T('Enquiry No.:', rightColX, blockTop - 9.5, 7.5, BOLD, C_BLACK);
  T(san(refNo), rightColX + 58, blockTop - 9.5, 7.5, BOLD, C_BLUE);

  T('Date:', rightColX, blockTop - 20.5, 7.5, BOLD, C_BLACK);
  T(san(dateStr), rightColX + 58, blockTop - 20.5, 7.5, BOLD, C_BLUE);

  // Divider under header block
  const r2y = blockTop - 28;
  pg.drawLine({ start: { x: ML, y: r2y }, end: { x: PW - MR, y: r2y }, thickness: 0.8, color: C_BLACK });

  cursor = r2y - 6;

  // ══════════════════════════════════════════════════════════════════════════
  //  SECTION 1 — PERSONAL PARTICULARS
  // ══════════════════════════════════════════════════════════════════════════
  section('1.  Personal Particulars');

  const gender = enquiry.gender === 'M' ? 'Male' : enquiry.gender === 'F' ? 'Female' : san(enquiry.gender) || '—';
  row2('Date of Birth',  san(formatDob(enquiry.dob)) || '—', 'Gender',           gender,                       false);
  row2('Category',       san(enquiry.category) || '—',       'Reference Source', san(enquiry.reference) || '—',   true);
  row2("Father's Name",  san(enquiry.fatherName) || '—',     "Mother's Name",    san(enquiry.motherName) || '—',  false);

  // ══════════════════════════════════════════════════════════════════════════
  //  SECTION 2 — CONTACT DETAILS
  // ══════════════════════════════════════════════════════════════════════════
  section('2.  Contact Details');

  row2('Primary Mobile',    san(enquiry.mobile1) || '—', 'Alternate Mobile', san(enquiry.mobile2) || '—', false);
  row2('Email Address',     san(enquiry.email) || '—',   '',                 '',                          true);
  row1('Permanent Address', san(enquiry.address) || '—', false);

  // ══════════════════════════════════════════════════════════════════════════
  //  SECTION 3 — ACADEMIC RECORD
  // ══════════════════════════════════════════════════════════════════════════
  section('3.  Academic Record');
  tHead();

  interface AR { exam: string; detail: string; result: string; }
  const aRows: AR[] = [
    { exam: 'Class X (Secondary)',       detail: san(enquiry.schoolNameWithState) || '—',               result: enquiry.class10Percent ? `${enquiry.class10Percent}%` : '—' },
    { exam: 'Class XII (Sr. Secondary)', detail: enquiry.class12Stream ? `Stream: ${san(enquiry.class12Stream)}` : '—', result: enquiry.class12Percent ? `${enquiry.class12Percent}%` : '—' },
  ];

  const subj = [
    enquiry.physicsMarks   ? `Phy: ${enquiry.physicsMarks}`   : '',
    enquiry.chemistryMarks ? `Chem: ${enquiry.chemistryMarks}` : '',
    enquiry.mathsMarks     ? `Math: ${enquiry.mathsMarks}`     : '',
    enquiry.biologyMarks   ? `Bio: ${enquiry.biologyMarks}`    : '',
    enquiry.csMarks        ? `CS: ${enquiry.csMarks}`          : '',
  ].filter(Boolean);

  const agg = [
    enquiry.pcmPercent ? `PCM: ${enquiry.pcmPercent}%` : '',
    enquiry.pcbPercent ? `PCB: ${enquiry.pcbPercent}%` : '',
  ].filter(Boolean);

  if (subj.length || agg.length) {
    aRows.push({ exam: 'Class XII Subjects', detail: subj.join('  ') || '—', result: agg.join('  ') || '—' });
  }

  if (enquiry.collegeUniversityName || enquiry.courses || enquiry.marks) {
    aRows.push({
      exam:   'Higher Education / Other',
      detail: [enquiry.collegeUniversityName, enquiry.courses].filter(Boolean).map(san).join(' – ') || '—',
      result: san(enquiry.marks) || '—',
    });
  }

  aRows.forEach((r, i) => tRow(r.exam, r.detail, r.result, i % 2 === 1));

  // ══════════════════════════════════════════════════════════════════════════
  //  SECTION 4 — ENTRANCE EXAMINATION SCORES
  // ══════════════════════════════════════════════════════════════════════════
  const exams: Array<{ name: string; value: string }> = [
    { name: 'NEET UG Score',      value: enquiry.neetUgScore    ? `${san(enquiry.neetUgScore)} / 720`   : '' },
    { name: 'NEET PG Score',      value: enquiry.neetPgScore    ? `${san(enquiry.neetPgScore)} / 800`   : '' },
    { name: 'JEE Mains CRL',      value: san(enquiry.jeeMainsCrl)   || '' },
    { name: 'Overall Percentile', value: enquiry.percentile     ? `${san(enquiry.percentile)}%`          : '' },
    { name: 'CUET Score / Rank',  value: san(enquiry.cuetScoreRank) || '' },
    { name: 'CET Score / Rank',   value: san(enquiry.cetScoreRank)  || '' },
    { name: 'CLAT Score / Rank',  value: san(enquiry.clatScoreRank) || '' },
    { name: 'CAT Score / Rank',   value: san(enquiry.catScoreRank)  || '' },
  ].filter(e => e.value);

  if (exams.length > 0) {
    section('4.  Entrance Examination Scores');
    for (let i = 0; i < exams.length; i += 2) {
      const a = exams[i];
      const b = exams[i + 1] ?? { name: '', value: '' };
      row2(a.name, a.value, b.name, b.value, Math.floor(i / 2) % 2 === 1);
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  //  SECTION 5 — ADDITIONAL RESPONSES (dynamic answers)
  // ══════════════════════════════════════════════════════════════════════════
  const knownKeys = new Set([
    'id','enquiryNumber','date','course','name','dob','gender',
    'motherName','fatherName','address','mobile1','mobile2','email',
    'class10Percent','class12Stream','class12Percent','physicsMarks',
    'chemistryMarks','mathsMarks','biologyMarks','csMarks',
    'schoolNameWithState','neetUgScore','neetPgScore','category',
    'cuetScoreRank','cetScoreRank','clatScoreRank','catScoreRank',
    'jeeMainsCrl','percentile','pcmPercent','pcbPercent',
    'collegeUniversityName','courses','marks','reference',
    'signatureDataUrl','termsAccepted','termsAcceptedAt','termsVersion',
    'privacyVersion','clientIp','pdfStoragePath','status','createdAt',
    'updatedAt','answers','description','cuetLevel','cetLevel',
  ]);

  const dynamic = Object.entries(enquiry.answers ?? {})
    .filter(([k, v]) => !knownKeys.has(k) && san(String(v)));

  if (dynamic.length > 0) {
    section('5.  Additional Information');
    for (let i = 0; i < dynamic.length; i += 2) {
      const [k1, v1] = dynamic[i];
      const [k2, v2] = dynamic[i + 1] ?? ['', ''];
      const lbl = (k: string) => k.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ').trim();
      row2(lbl(k1), san(String(v1)), k2 ? lbl(k2) : '', san(String(v2 ?? '')), Math.floor(i / 2) % 2 === 1);
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  //  DECLARATION + SIGNATURE
  // ══════════════════════════════════════════════════════════════════════════
  section('Declaration');

  const decl = 'I hereby declare that the information provided above is true and correct to the best of my knowledge. I understand that any misrepresentation may lead to cancellation of my candidature.';
  const dLines = wordWrap(decl, REG, 7.5, CW - 8);
  ensureSpace(dLines.length * 11 + 55);
  dLines.forEach(ln => {
    T(ln, ML + 4, cursor - 7, 7.5, REG, C_BODY);
    cursor -= 11;
  });

  cursor -= 18; // Clean gap before signature lines

  ensureSpace(35);
  if (sig) {
    const sc = Math.min(130 / sig.width, 26 / sig.height);
    const sw = sig.width * sc;
    const sh = sig.height * sc;
    pg.drawImage(sig, { x: PW - MR - sw - 10, y: cursor - sh, width: sw, height: sh });
    cursor -= sh + 2;
  }

  const signY = cursor - 4;
  pg.drawLine({ start: { x: ML + 4, y: signY }, end: { x: ML + 140, y: signY }, thickness: 0.5, color: C_BLACK });
  pg.drawLine({ start: { x: PW - MR - 160, y: signY }, end: { x: PW - MR - 4, y: signY }, thickness: 0.5, color: C_BLACK });
  T('Date', ML + 4, signY - 9, 6, REG, C_MUTED);
  T('Signature of Candidate', PW - MR - 160, signY - 9, 6, REG, C_MUTED);

  // ══════════════════════════════════════════════════════════════════════════
  //  FOOTER
  // ══════════════════════════════════════════════════════════════════════════
  pages.forEach((p, i) => {
    const pn = i + 1;
    const tot = pages.length;

    if (pn > 1) {
      p.drawLine({ start: { x: ML, y: PH - 14 }, end: { x: PW - MR, y: PH - 14 }, thickness: 0.3, color: C_LINE });
      p.drawText(`Candidate Enquiry  —  Ref: ${refNo}`, {
        x: ML, y: PH - 11, size: 5.5, font: REG, color: C_MUTED,
      });
    }

    p.drawLine({ start: { x: ML, y: FOOTER_BOT + 16 }, end: { x: PW - MR, y: FOOTER_BOT + 16 }, thickness: 0.35, color: C_LINE });

    p.drawText('Eduspray India Pvt. Ltd.  |  104-105, Rishabh Tower, Karkardooma, Delhi - 110092  |  www.eduspray.in  |  +91 85956 84716', {
      x: ML, y: FOOTER_BOT + 9, size: 5.2, font: REG, color: C_MUTED,
    });

    p.drawText(`Generated: ${dateStr} ${timeStr}  |  Ref: ${refNo}  |  IP: ${san(enquiry.clientIp) || 'N/A'}`, {
      x: ML, y: FOOTER_BOT + 1, size: 4.8, font: REG, color: C_LINE,
    });
  });

  return doc.save();
}
