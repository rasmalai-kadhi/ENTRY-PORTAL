import { EnquiryForm } from '@/components/enquiry/EnquiryForm';

export default function EnquiryPage() {
  return <main className="container enquiry-page"><h1>Self Declaration Enquiry Form</h1><p className="enquiry-intro">Tell us a little about yourself and the course you are exploring. Fields marked as required will be checked before your enquiry is submitted.</p><EnquiryForm /></main>;
}
