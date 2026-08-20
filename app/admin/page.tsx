import { Dashboard } from '@/components/admin/Dashboard';
import { getAdminContext } from '@/lib/auth/admin';
import { redirect } from 'next/navigation';

export default async function AdminPage() { if (!await getAdminContext()) redirect('/admin/login'); return <Dashboard />; }
