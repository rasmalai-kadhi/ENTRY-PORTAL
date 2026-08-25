import { redirect } from 'next/navigation';
import { PdfMappingTestEditor } from '@/components/admin/PdfMappingTestEditor';
import { SensitiveAdminGate } from '@/components/admin/SensitiveAdminGate';
import { getAdminContext } from '@/lib/auth/admin';

export default async function PdfMappingTestPage() {
  if (!await getAdminContext()) redirect('/admin/login?next=/admin/pdf-mapping/test');
  return <SensitiveAdminGate resource="PDF mapping"><PdfMappingTestEditor /></SensitiveAdminGate>;
}