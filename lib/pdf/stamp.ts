import fs from 'node:fs/promises';
import path from 'node:path';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import type { Enquiry } from '@/types/enquiry';
import { PDF_COORDINATES } from './coordinates';

const TEMPLATE = path.join(process.cwd(), 'private', 'templates', 'entry-form.pdf');

function truncate(value: string, max = 80) {
  return value.length > max ? `${value.slice(0, max - 1)}…` : value;
}

export async function stampEnquiryPdf(enquiry: Enquiry): Promise<Uint8Array> {
  const input = await fs.readFile(TEMPLATE);
  const pdf = await PDFDocument.load(input);
  const page = pdf.getPages()[0];
  const font = await pdf.embedFont(StandardFonts.Helvetica);

  const values: Record<string, string> = {
    date: enquiry.date,
    course: enquiry.course,
    name: enquiry.name,
    dob: enquiry.dob,
    gender: enquiry.gender,
    motherName: enquiry.motherName,
    fatherName: enquiry.fatherName,
    address: enquiry.address,
    mobile1: enquiry.mobile1,
    mobile2: enquiry.mobile2,
    email: enquiry.email,
    class10Percent: enquiry.class10Percent,
    class12Stream: enquiry.class12Stream,
    class12Percent: enquiry.class12Percent,
    physicsMarks: enquiry.physicsMarks,
    chemistryMarks: enquiry.chemistryMarks,
    mathsMarks: enquiry.mathsMarks,
    biologyMarks: enquiry.biologyMarks,
    csMarks: enquiry.csMarks,
    schoolNameWithState: enquiry.schoolNameWithState,
    neetUgScore: enquiry.neetUgScore,
    neetPgScore: enquiry.neetPgScore,
    category: enquiry.category,
    cuetScoreRank: enquiry.cuetScoreRank,
    cetScoreRank: enquiry.cetScoreRank,
    clatScoreRank: enquiry.clatScoreRank,
    reference: enquiry.reference,
    catScoreRank: enquiry.catScoreRank,
    jeeMainsCrl: enquiry.jeeMainsCrl,
    percentile: enquiry.percentile,
    pcmPercent: enquiry.pcmPercent,
    pcbPercent: enquiry.pcbPercent,
    collegeUniversityName: enquiry.collegeUniversityName,
    courses: enquiry.courses,
    marks: enquiry.marks,
    enquiryNumber: enquiry.enquiryNumber,
  };

  for (const [key, raw] of Object.entries(values)) {
    const coord = PDF_COORDINATES[key as keyof typeof PDF_COORDINATES];
    if (!coord || !raw) continue;
    page.drawText(truncate(raw), {
      x: coord.x,
      y: coord.y,
      size: coord.size,
      font,
      color: rgb(0, 0, 0),
    });
  }

  // Signature: decode PNG/JPEG data URL when present.
  if (enquiry.signatureDataUrl?.startsWith('data:image/')) {
    try {
      const [, meta, base64] = enquiry.signatureDataUrl.match(/^data:(image\/(?:png|jpeg));base64,(.+)$/) ?? [];
      if (meta && base64) {
        const bytes = Buffer.from(base64, 'base64');
        const image = meta === 'image/png' ? await pdf.embedPng(bytes) : await pdf.embedJpg(bytes);
        page.drawImage(image, { x: 400, y: 95, width: 120, height: 35 });
      }
    } catch {
      // Signature errors should not prevent creation of the form.
    }
  }

  return await pdf.save();
}
