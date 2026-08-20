import { EnquiryList } from '@/components/admin/EnquiryList';
import { getAdminContext } from '@/lib/auth/admin';
import { redirect } from 'next/navigation';

export default async function EnquiriesPage() { if (!await getAdminContext()) redirect('/admin/login'); return <EnquiryList title="View all enquiries" />; }
