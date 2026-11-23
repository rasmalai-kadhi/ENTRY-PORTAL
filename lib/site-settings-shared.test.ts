import { describe, expect, it } from 'vitest';
import { isMaintenanceActive, isMaintenanceScheduled, type MaintenanceSettings } from '@/lib/site-settings-shared';

const settings: MaintenanceSettings = {
  id: 'global',
  maintenance_enabled: true,
  maintenance_message: 'Updating the portal',
  maintenance_start: '2026-09-18T10:00:00.000Z',
  maintenance_end: '2026-09-18T11:00:00.000Z',
  password_protection_enabled: true,
  maintenance_password_hash: '',
  updated_at: '2026-09-18T09:00:00.000Z',
};

describe('maintenance windows', () => {
  it('keeps the form available before a scheduled start', () => {
    const now = new Date('2026-09-18T09:30:00.000Z');
    expect(isMaintenanceScheduled(settings, now)).toBe(true);
    expect(isMaintenanceActive(settings, now)).toBe(false);
  });

  it('is active inside the configured window and inactive at the end', () => {
    expect(isMaintenanceActive(settings, new Date('2026-09-18T10:30:00.000Z'))).toBe(true);
    expect(isMaintenanceActive(settings, new Date('2026-09-18T11:00:00.000Z'))).toBe(false);
  });
});