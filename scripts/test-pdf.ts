import fs from 'node:fs/promises';
import { generateEnquiryPdf } from '@/lib/pdf/generate';
import type { Enquiry } from '@/types/enquiry';

const sample: Enquiry = {
  enquiryNumber: 'ENQ-20261004-0042',
  date: '04/10/2026',
  course: 'MBBS (Bachelor of Medicine & Bachelor of Surgery)',
  name: 'Aarav Sharma',
  dob: '2005-08-15',
  gender: 'M',
  motherName: 'Sunita Sharma',
  fatherName: 'Rajesh Sharma',
  address: 'Plot No. 45, Sector 12, Dwarka, New Delhi - 110078',
  mobile1: '9876543210',
  mobile2: '9876543211',
  email: 'aarav.sharma@example.com',
  class10Percent: '94.6',
  class12Stream: 'SCIENCE (PCB)',
  class12Percent: '91.2',
  physicsMarks: '92',
  chemistryMarks: '90',
  mathsMarks: '88',
  biologyMarks: '95',
  csMarks: '',
  schoolNameWithState: 'Delhi Public School, R.K. Puram, New Delhi',
  neetUgScore: '665',
  neetPgScore: '',
  category: 'General',
  cuetScoreRank: '',
  cetScoreRank: '',
  clatScoreRank: '',
  catScoreRank: '',
  jeeMainsCrl: '12450',
  percentile: '98.75',
  pcmPercent: '90.0',
  pcbPercent: '92.33',
  collegeUniversityName: '',
  courses: 'B.Sc. Biotechnology',
  marks: 'KVPY Fellow (Rank 412)',
  reference: 'Educational Seminar / Web Portal',
  clientIp: '103.21.244.18',
  signatureDataUrl: '',
  answers: {},
};

async function main() {
  const pdf = await generateEnquiryPdf(sample);
  await fs.writeFile('sample-computer-generated-bill.pdf', pdf);
  console.log(`Created sample-computer-generated-bill.pdf (${pdf.length} bytes)`);
}

void main();

