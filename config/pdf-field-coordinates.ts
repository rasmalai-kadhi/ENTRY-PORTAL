import type { PdfFieldMapping } from '@/types/pdf-mapping';

/**
 * Manual PDF placement file for entry-form.pdf.
 *
 * Coordinates use PDF points, not browser pixels.
 * Origin: bottom-left of the visible PDF page.
 * x: distance from the left edge.
 * y: distance from the bottom edge.
 * width / height: the printable field rectangle.
 *
 * Edit this file, then run:
 *   npm run sync:pdf-coordinates
 *
 * The command updates Supabase. New submissions then use these positions.
 * below is the order of the array elements:
 * fieldKey, label, x, y, width, height, fontSize, multiline
 */
export const manualPdfFieldCoordinates = [
  ['date', 'Submission Date', 150, 750, 100, 16, 10, false],
  ['course', 'Course', 350, 850, 180, 16, 10, false],
  ['name', 'Full Name', 60, 600.1700185, 220, 16, 10, false],
  ['dob', 'Date of Birth', 415, 682.1700185, 120, 16, 10, false],
  ['gender', 'Gender', 500, 657.1700185, 70, 16, 10, false],
  ['motherName', "Mother's Name", 115, 630.1700185, 180, 16, 10, false],
  ['fatherName', "Father's Name", 115, 607.1700185, 180, 16, 10, false],
  ['address', 'Address', 80, 572.1700185, 420, 50, 10, true],
  ['mobile1', 'Primary Mobile', 150, 527.1700185, 150, 16, 10, false],
  ['mobile2', 'Alternate Mobile', 350, 527.1700185, 150, 16, 10, false],
  ['email', 'Email', 90, 497.1700185, 320, 16, 10, false],
  ['class10Percent', 'Class 10 Percentage', 150, 462.1700185, 100, 16, 10, false],
  ['class12Stream', 'Class 12 Stream', 250, 437.1700185, 120, 16, 10, false],
  ['class12Percent', 'Class 12 Percentage', 420, 437.1700185, 100, 16, 10, false],
  ['physicsMarks', 'Physics Marks', 95, 407.1700185, 100, 16, 9, false],
  ['chemistryMarks', 'Chemistry Marks', 245, 407.1700185, 100, 16, 9, false],
  ['mathsMarks', 'Mathematics Marks', 370, 407.1700185, 100, 16, 9, false],
  ['biologyMarks', 'Biology Marks', 470, 407.1700185, 100, 16, 9, false],
  ['csMarks', 'Computer Science Marks', 520, 407.1700185, 65, 16, 9, false],
  ['schoolNameWithState', 'School Name and State', 160, 377.1700185, 300, 16, 9, false],
  ['neetUgScore', 'NEET UG Score', 130, 337.1700185, 150, 16, 9, false],
  ['neetPgScore', 'NEET PG Score', 395, 337.1700185, 150, 16, 9, false],
  ['category', 'Admission Category', 150, 312.1700185, 150, 16, 9, false],
  ['cuetScoreRank', 'CUET Score / Rank', 150, 287.1700185, 150, 16, 9, false],
  ['cetScoreRank', 'UG / PG CET Score / Rank', 390, 287.1700185, 150, 16, 9, false],
  ['clatScoreRank', 'CLAT Score / Rank', 150, 262.1700185, 150, 16, 9, false],
  ['reference', 'How did you hear about us?', 120, 212.1700185, 250, 16, 9, false],
  ['catScoreRank', 'CAT Score / Percentile', 420, 152.1700185, 150, 16, 9, false],
  ['jeeMainsCrl', 'JEE Mains CRL', 140, 122.1700185, 150, 16, 9, false],
  ['percentile', 'Overall Percentile', 410, 122.1700185, 150, 16, 9, false],
  ['pcmPercent', 'PCM Percentage', 120, 92.1700185, 150, 16, 9, false],
  ['pcbPercent', 'PCB Percentage', 300, 92.1700185, 150, 16, 9, false],
  ['collegeUniversityName', 'College / University', 170, 67.1700185, 300, 16, 9, false],
  ['courses', 'Other Courses', 120, 37.1700185, 200, 16, 9, false],
  ['marks', 'Other Marks Information', 340, 37.1700185, 200, 16, 9, false],
  ['enquiryNumber', 'Enquiry ID', 430, 12.1700185, 140, 16, 9, false],
] as const;

export const manualPdfMappings: PdfFieldMapping[] = manualPdfFieldCoordinates.map(([field_key, field_label, x, y, width, height, font_size, multiline]) => ({
  template_id: 'entry-form',
  field_key,
  field_label,
  page_number: 1,
  x,
  y,
  width,
  height,
  font_size,
  font_family: 'Helvetica',
  alignment: 'left',
  color: '#000000',
  multiline,
  rotation: 0,
}));
