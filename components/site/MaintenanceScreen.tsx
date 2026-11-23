import type { MaintenanceSettings } from '@/lib/site-settings-shared';

function formatDate(value: string | null) {
  return value ? new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value)) : null;
}

export function MaintenanceScreen({ settings }: { settings: MaintenanceSettings }) {
  const returnTime = formatDate(settings.maintenance_end);
  return <main className="container maintenance-page"><div className="maintenance-message"><p className="eyebrow">Eduspray Enquiry Portal</p><h1>We're currently performing maintenance.</h1><p>Please check back soon.</p>{settings.maintenance_message && <p className="maintenance-notice-copy">{settings.maintenance_message}</p>}{returnTime && <p className="maintenance-return">Expected return: <strong>{returnTime}</strong></p>}</div></main>;
}