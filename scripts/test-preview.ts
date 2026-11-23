import fs from 'node:fs/promises';
import { generateComputerGeneratedBill } from '@/lib/pdf/bill-generator';
import type { Enquiry } from '@/types/enquiry';

const samplePreviewEnquiry: Enquiry = {
  enquiryNumber: 'ENQ-PREVIEW-001',
  date: '06/10/2026',
  course: 'MBBS (Bachelor of Medicine & Bachelor of Surgery)',
  name: 'Sample Candidate',
  dob: '2005-05-15',
  gender: 'M',
  motherName: 'Sample Mother',
  fatherName: 'Sample Father',
  address: '123 Education Boulevard, New Delhi - 110001',
  mobile1: '9876543210',
  mobile2: '9876543211',
  email: 'candidate@example.com',
  class10Percent: '92.5',
  class12Stream: 'SCIENCE (PCB)',
  class12Percent: '89.4',
  physicsMarks: '90',
  chemistryMarks: '92',
  mathsMarks: '85',
  biologyMarks: '94',
  csMarks: '',
  schoolNameWithState: 'Delhi Public School, Delhi',
  neetUgScore: '650',
  neetPgScore: '',
  category: 'General',
  cuetScoreRank: '',
  cetScoreRank: '',
  clatScoreRank: '',
  catScoreRank: '',
  jeeMainsCrl: '14200',
  percentile: '98.2',
  pcmPercent: '89.0',
  pcbPercent: '92.0',
  collegeUniversityName: '',
  courses: '',
  marks: '',
  reference: 'Website',
  signatureDataUrl: '',
  clientIp: '127.0.0.1',
  answers: {},
};

async function test() {
  const bytes = await generateComputerGeneratedBill(samplePreviewEnquiry, {
    generatedAt: new Date('2026-10-06T17:05:00Z'),
  });
  await fs.writeFile('scratch_test_preview.pdf', bytes);
  console.log('Generated scratch_test_preview.pdf');
}

void test();
