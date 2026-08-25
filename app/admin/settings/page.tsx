import { PdfMappingEditor } from '@/components/admin/PdfMappingEditor';
import { SensitiveAdminGate } from '@/components/admin/SensitiveAdminGate';
import { getAdminContext } from '@/lib/auth/admin';
import { redirect } from 'next/navigation';

export default async function SettingsPage() {
  if (!await getAdminContext()) redirect('/admin/login');
  return <SensitiveAdminGate resource="PDF mapping"><PdfMappingEditor /></SensitiveAdminGate>;
}
