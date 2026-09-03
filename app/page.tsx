import { EnquiryForm } from '@/components/enquiry/EnquiryForm';
import { headers } from 'next/headers';
import { getClientIp } from '@/lib/request/client-ip';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eduspray Enquiry Form',
  description: 'Submit your enquiry and entry form to Eduspray',
};

export default async function EnquiryPage() {
  const clientIp = getClientIp(await headers());
  return <main className="container" style={{ padding: '32px 0' }}><h1>Self Declaration Enquiry Form</h1><EnquiryForm initialClientIp={clientIp} /></main>;
}
