import { EnquiryList } from '@/components/admin/EnquiryList';
import { getAdminContext } from '@/lib/auth/admin';
import { redirect } from 'next/navigation';

export default async function SearchPage() { if (!await getAdminContext()) redirect('/admin/login'); return <EnquiryList title="Search enquiries" searchOnly />; }