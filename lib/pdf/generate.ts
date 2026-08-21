import type { Enquiry } from '@/types/enquiry';
import { getPdfFieldMappings } from '@/lib/pdf/get-mappings';
import { stampPdf } from '@/lib/pdf/stamp';

export async function generateEnquiryPdf(enquiry: Enquiry): Promise<Uint8Array> {
  return stampPdf(enquiry, await getPdfFieldMappings());
}