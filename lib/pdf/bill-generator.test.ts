import { describe, expect, it } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { generateComputerGeneratedBill } from './bill-generator';
import type { Enquiry } from '@/types/enquiry';

describe('generateComputerGeneratedBill', () => {
  const minimalEnquiry: Enquiry = {
    enquiryNumber: 'ENQ-TEST-001',
    date: '04/10/2026',
    course: 'MBBS',
    name: 'Test Student',
    dob: '2005-01-01',
    gender: 'M',
    motherName: 'Mother',
    fatherName: 'Father',
    address: '123 Main Road, City',
    mobile1: '9876543210',
    mobile2: '',
    email: 'test@example.com',
    class10Percent: '90',
    class12Stream: 'Science',
    class12Percent: '88',
    physicsMarks: '90',
    chemistryMarks: '85',
    mathsMarks: '80',
    biologyMarks: '92',
    csMarks: '',
    schoolNameWithState: 'Delhi School',
    neetUgScore: '600',
    neetPgScore: '',
    category: 'General',
    cuetScoreRank: '',
    cetScoreRank: '',
    clatScoreRank: '',
    catScoreRank: '',
    jeeMainsCrl: '',
    percentile: '',
    pcmPercent: '',
    pcbPercent: '',
    collegeUniversityName: '',
    courses: '',
    marks: '',
    reference: 'Web',
    signatureDataUrl: '',
  };

  it('generates a valid A4 PDF document for standard enquiry data', async () => {
    const pdfBytes = await generateComputerGeneratedBill(minimalEnquiry);
    expect(pdfBytes).toBeInstanceOf(Uint8Array);
    expect(pdfBytes.length).toBeGreaterThan(1000);

    // Verify PDF header magic bytes "%PDF-"
    const header = Buffer.from(pdfBytes.subarray(0, 5)).toString('ascii');
    expect(header).toBe('%PDF-');

    // Load and verify PDF structure
    const doc = await PDFDocument.load(pdfBytes);
    expect(doc.getPageCount()).toBeGreaterThanOrEqual(1);

    const firstPage = doc.getPage(0);
    const size = firstPage.getSize();
    expect(Math.round(size.width)).toBe(595); // 595.28 pt A4
    expect(Math.round(size.height)).toBe(842); // 841.89 pt A4
  });

  it('sanitizes unicode and special characters without WinAnsi encoding errors', async () => {
    const unicodeEnquiry: Enquiry = {
      ...minimalEnquiry,
      name: 'Rāhul Shârma ✓ (Special ★ Name)',
      address: 'Plot #12, “Emerald Heights”, Sector—4, Delhi • ₹5000',
      answers: {
        description: 'Testing special bullets • and checkmarks ✓ and quotes “hello”.',
      },
    };

    const pdfBytes = await generateComputerGeneratedBill(unicodeEnquiry);
    expect(pdfBytes).toBeInstanceOf(Uint8Array);

    const doc = await PDFDocument.load(pdfBytes);
    expect(doc.getPageCount()).toBeGreaterThanOrEqual(1);
  });

  it('handles multi-page pagination gracefully when dynamic content is extensive', async () => {
    const dynamicAnswers: Record<string, string> = {
      description: 'Extensive candidate statement with multiple sentences to test space allocation.',
    };

    for (let i = 1; i <= 25; i++) {
      dynamicAnswers[`customQuestion${i}`] = `Detailed candidate answer for dynamic form question number ${i}.`;
    }

    const largeEnquiry: Enquiry = {
      ...minimalEnquiry,
      answers: dynamicAnswers,
    };

    const pdfBytes = await generateComputerGeneratedBill(largeEnquiry);
    const doc = await PDFDocument.load(pdfBytes);
    expect(doc.getPageCount()).toBeGreaterThanOrEqual(2);
  });
});
