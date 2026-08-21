import { redirect } from 'next/navigation';
import { PdfMappingTestEditor } from '@/components/admin/PdfMappingTestEditor';
import { getAdminContext } from '@/lib/auth/admin';
import { getPdfFieldMappings } from '@/lib/pdf/get-mappings';

export default async function PdfMappingTestPage() {
  if (!await getAdminContext()) redirect('/admin/login?next=/admin/pdf-mapping/test');
  return <PdfMappingTestEditor initialMappings={await getPdfFieldMappings()} />;
}