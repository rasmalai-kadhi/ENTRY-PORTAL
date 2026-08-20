import { EnquiryDetail } from '@/components/admin/EnquiryDetail';
import { getAdminContext } from '@/lib/auth/admin';
import { redirect } from 'next/navigation';

export default async function EnquiryDetailsPage({ params }: { params: Promise<{ id: string }> }) { if (!await getAdminContext()) redirect('/admin/login'); return <EnquiryDetail id={(await params).id} />; }
