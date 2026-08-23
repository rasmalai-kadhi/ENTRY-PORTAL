import { QuestionsManager } from '@/components/admin/QuestionsManager';
import { getAdminContext } from '@/lib/auth/admin';
import { redirect } from 'next/navigation';

export default async function QuestionsPage() {
  if (!await getAdminContext()) redirect('/admin/login?next=/admin/questions');
  return <QuestionsManager />;
}