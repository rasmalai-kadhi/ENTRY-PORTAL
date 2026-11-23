import { NextResponse } from 'next/server';
import { getAdminContext } from '@/lib/auth/admin';
import { generateComputerGeneratedBill } from '@/lib/pdf/bill-generator';
import type { Enquiry } from '@/types/enquiry';

export const runtime = 'nodejs';

const samplePreviewEnquiry: Enquiry = {
  enquiryNumber: 'ENQ-PREVIEW-001',
  date: new Date().toLocaleDateString('en-GB'),
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

export async function GET() {
  if (!await getAdminContext()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const bytes = await generateComputerGeneratedBill(samplePreviewEnquiry);
  return new NextResponse(Buffer.from(bytes), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="sample-bill-preview.pdf"',
      'Cache-Control': 'private, no-store',
    },
  });
}

export async function POST(request: Request) {
  if (!await getAdminContext()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await request.json().catch(() => null) as { enquiry?: Enquiry } | null;
  const enquiry = body?.enquiry ?? samplePreviewEnquiry;

  const bytes = await generateComputerGeneratedBill(enquiry);
  return new NextResponse(Buffer.from(bytes), {
    headers: {
      'Content-Type': 'application/pdf',
      'Cache-Control': 'private, no-store',
    },
  });
}