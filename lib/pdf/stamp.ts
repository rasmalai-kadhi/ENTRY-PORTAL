import fs from 'node:fs/promises';
import path from 'node:path';
import { PDFDocument, StandardFonts, degrees, rgb } from 'pdf-lib';
import type { Enquiry } from '@/types/enquiry';
import type { PdfFieldMapping } from '@/types/pdf-mapping';

const TEMPLATE = path.join(process.cwd(), 'private', 'templates', 'entry-form.pdf');
const NON_PDF_KEYS = new Set(['id', 'pdfStoragePath', 'status', 'createdAt', 'updatedAt', 'answers']);

function valueFor(enquiry: Enquiry, key: string) {
  if (key === 'enquiryNumber') return enquiry.enquiryNumber;
  if (key === 'date') return enquiry.date;
  if (enquiry.answers?.[key] !== undefined) return enquiry.answers[key];
  return String((enquiry as unknown as Record<string, unknown>)[key] ?? '');
}

function parseColor(value: string) {
  const hex = /^#?([0-9a-f]{6})$/i.exec(value)?.[1] ?? '000000';
  return rgb(parseInt(hex.slice(0, 2), 16) / 255, parseInt(hex.slice(2, 4), 16) / 255, parseInt(hex.slice(4, 6), 16) / 255);
}

function wrapText(value: string, font: Awaited<ReturnType<PDFDocument['embedFont']>>, size: number, width: number) {
  const words = value.split(/\s+/);
  const lines: string[] = [];
  let line = '';
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (line && font.widthOfTextAtSize(candidate, size) > width) {
      lines.push(line);
      line = word;
    } else line = candidate;
  }
  if (line) lines.push(line);
  return lines;
}

export async function stampPdf(enquiry: Enquiry, mappings: PdfFieldMapping[]): Promise<Uint8Array> {
  if (!mappings.length) throw new Error('Cannot generate PDF: no saved field mappings were supplied.');
  const input = await fs.readFile(TEMPLATE);
  const pdf = await PDFDocument.load(input);
  const mappedKeys = new Set(mappings.map(mapping => mapping.field_key));
  for (const [key, value] of Object.entries(enquiry)) {
    if (value && !mappedKeys.has(key) && !NON_PDF_KEYS.has(key)) throw new Error(`No mapping found for field: ${key}`);
  }
  console.info('MAPPING_SOURCE = SUPABASE');
  const fonts = new Map<string, Awaited<ReturnType<PDFDocument['embedFont']>>>();
  async function getFont(family: string) {
    const name = family in StandardFonts ? family : family === 'Times-Roman' ? StandardFonts.TimesRoman : family === 'Courier' ? StandardFonts.Courier : StandardFonts.Helvetica;
    if (!fonts.has(name)) fonts.set(name, await pdf.embedFont(name));
    return fonts.get(name)!;
  }

  for (const mapping of mappings) {
    const page = pdf.getPages()[mapping.page_number - 1];
    if (!page) {
      console.warn(`PDF mapping skipped: page ${mapping.page_number} does not exist for field "${mapping.field_key}".`);
      continue;
    }
    const raw = valueFor(enquiry, mapping.field_key);
    if (!raw) continue;
    const mediaBox = page.getMediaBox();
    const x = mapping.x + mediaBox.x;
    const y = mapping.y + mediaBox.y;
    console.debug('PDF mapping', { fieldKey: mapping.field_key, page: mapping.page_number, x: mapping.x, y: mapping.y, width: mapping.width, height: mapping.height });
    const color = parseColor(mapping.color);
    if (mapping.field_key === 'signatureDataUrl' && raw.startsWith('data:image/')) {
      const [, meta, base64] = raw.match(/^data:(image\/(?:png|jpeg));base64,(.+)$/) ?? [];
      if (meta && base64) {
        const image = meta === 'image/png' ? await pdf.embedPng(Buffer.from(base64, 'base64')) : await pdf.embedJpg(Buffer.from(base64, 'base64'));
        page.drawImage(image, { x, y, width: mapping.width, height: mapping.height, rotate: degrees(mapping.rotation) });
      }
      continue;
    }
    const stampedText = raw.toUpperCase();
    const font = await getFont(mapping.font_family);
    const size = Math.max(1, mapping.font_size);
    const lines = mapping.multiline ? wrapText(stampedText, font, size, mapping.width) : [stampedText];
    const lineHeight = size * 1.2;
    const visibleLines = lines.slice(0, Math.max(1, Math.floor(mapping.height / lineHeight)));
    visibleLines.forEach((line, index) => {
      const lineWidth = font.widthOfTextAtSize(line, size);
      const textX = mapping.alignment === 'center' ? x + Math.max(0, (mapping.width - lineWidth) / 2) : mapping.alignment === 'right' ? x + Math.max(0, mapping.width - lineWidth) : x;
      page.drawText(line, { x: textX, y: y + mapping.height - size - index * lineHeight, size, font, color, rotate: degrees(mapping.rotation), maxWidth: mapping.width });
    });
  }
  return pdf.save();
}
