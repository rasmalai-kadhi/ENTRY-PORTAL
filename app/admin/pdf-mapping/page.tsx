import { PdfMappingEditor } from '@/components/admin/PdfMappingEditor';
import { SensitiveAdminGate } from '@/components/admin/SensitiveAdminGate';
import { getAdminContext } from '@/lib/auth/admin';
import { redirect } from 'next/navigation';

export default async function PdfMappingPage() {
  if (!await getAdminContext()) redirect('/admin/login?next=/admin/pdf-mapping');
  return <SensitiveAdminGate resource="PDF mapping"><PdfMappingEditor /></SensitiveAdminGate>;
}