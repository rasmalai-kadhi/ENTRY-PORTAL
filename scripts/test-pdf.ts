import fs from 'node:fs/promises';
import { generateEnquiryPdf } from '@/lib/pdf/generate';
import type { Enquiry } from '@/types/enquiry';

const sample = { enquiryNumber: 'ENQ-TEST-0001', date: '19/08/2026', course: 'MBBS', name: 'Test Candidate', dob: '01/01/2000', gender: 'M', motherName: 'Mother', fatherName: 'Father', address: 'Test Address', mobile1: '9999999999', mobile2: '', email: 'test@example.com', class10Percent: '90', class12Stream: 'SCIENCE', class12Percent: '88', physicsMarks: '90', chemistryMarks: '91', mathsMarks: '92', biologyMarks: '93', csMarks: '', schoolNameWithState: 'Test School, Delhi', neetUgScore: '650', neetPgScore: '', category: 'GEN', cuetScoreRank: '', cetScoreRank: '', clatScoreRank: '', catScoreRank: '', jeeMainsCrl: '', percentile: '', pcmPercent: '', pcbPercent: '', collegeUniversityName: '', courses: '', marks: '', reference: 'Website', description: 'Test', signatureDataUrl: '' } as Enquiry;
async function main() {
	const pdf = await generateEnquiryPdf(sample);
	await fs.writeFile('sample-stamped-output.pdf', pdf);
	console.log('Created sample-stamped-output.pdf');
}

void main();
