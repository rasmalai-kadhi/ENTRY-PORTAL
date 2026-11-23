import type { Enquiry } from '@/types/enquiry';
import { generateComputerGeneratedBill } from '@/lib/pdf/bill-generator';

export async function generateEnquiryPdf(enquiry: Enquiry): Promise<Uint8Array> {
  return generateComputerGeneratedBill(enquiry);
}