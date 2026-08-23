import { EnquiryForm } from '@/components/enquiry/EnquiryForm';
import { headers } from 'next/headers';
import { getClientIp } from '@/lib/request/client-ip';

export default async function EnquiryPage() {
  const clientIp = getClientIp(await headers());
  return <main className="container enquiry-page"><h1>Self Declaration Enquiry Form</h1><EnquiryForm initialClientIp={clientIp} /></main>;
}
