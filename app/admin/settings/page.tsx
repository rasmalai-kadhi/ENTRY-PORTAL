import { PdfMappingEditor } from '@/components/admin/PdfMappingEditor';
import { getAdminContext } from '@/lib/auth/admin';
import { redirect } from 'next/navigation';

export default async function SettingsPage() {
  if (!await getAdminContext()) redirect('/admin/login');
  return <PdfMappingEditor />;
}
