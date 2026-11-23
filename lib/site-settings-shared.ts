export type MaintenanceSettings = {
  id: 'global';
  maintenance_enabled: boolean;
  maintenance_message: string;
  maintenance_start: string | null;
  maintenance_end: string | null;
  password_protection_enabled: boolean;
  maintenance_password_hash?: string;
  has_custom_password?: boolean;
  updated_at: string;
};

export const defaultSettings: MaintenanceSettings = {
  id: 'global',
  maintenance_enabled: false,
  maintenance_message: '',
  maintenance_start: null,
  maintenance_end: null,
  password_protection_enabled: true,
  maintenance_password_hash: '',
  updated_at: new Date(0).toISOString(),
};

export function isMaintenanceActive(settings: MaintenanceSettings, now = new Date()) {
  if (!settings.maintenance_enabled) return false;
  const start = settings.maintenance_start ? Date.parse(settings.maintenance_start) : null;
  const end = settings.maintenance_end ? Date.parse(settings.maintenance_end) : null;
  return (start === null || !Number.isNaN(start) && now.getTime() >= start) && (end === null || !Number.isNaN(end) && now.getTime() < end);
}

export function isMaintenanceScheduled(settings: MaintenanceSettings, now = new Date()) {
  if (!settings.maintenance_enabled || !settings.maintenance_start) return false;
  const start = Date.parse(settings.maintenance_start);
  return !Number.isNaN(start) && now.getTime() < start;
}