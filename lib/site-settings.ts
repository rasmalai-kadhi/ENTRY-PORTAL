import { createAdminClient } from '@/lib/supabase/admin';
import type { MaintenanceSettings } from '@/lib/site-settings-shared';
import { defaultSettings } from '@/lib/site-settings-shared';
import fs from 'node:fs/promises';
import path from 'node:path';

export type { MaintenanceSettings } from '@/lib/site-settings-shared';

const FALLBACK_FILE = path.join(process.cwd(), 'private', 'site-settings.json');

async function readFallbackSettings(): Promise<MaintenanceSettings> {
  try {
    const raw = await fs.readFile(FALLBACK_FILE, 'utf-8');
    return { ...defaultSettings, ...JSON.parse(raw) };
  } catch {
    return defaultSettings;
  }
}

async function writeFallbackSettings(settings: MaintenanceSettings): Promise<void> {
  try {
    await fs.mkdir(path.dirname(FALLBACK_FILE), { recursive: true });
    await fs.writeFile(FALLBACK_FILE, JSON.stringify(settings, null, 2), 'utf-8');
  } catch {
    // Fallback file write error is non-fatal
  }
}

export async function getMaintenanceSettings(): Promise<MaintenanceSettings> {
  try {
    const { data, error } = await createAdminClient().from('site_settings').select('*').eq('id', 'global').maybeSingle();
    if (error || !data) {
      return await readFallbackSettings();
    }
    return {
      ...defaultSettings,
      ...(data as MaintenanceSettings),
    };
  } catch {
    return await readFallbackSettings();
  }
}

export async function saveMaintenanceSettings(updates: Partial<MaintenanceSettings>): Promise<MaintenanceSettings> {
  const current = await getMaintenanceSettings();
  const next: MaintenanceSettings = {
    ...current,
    ...updates,
    id: 'global',
    updated_at: new Date().toISOString(),
  };

  try {
    const { data, error } = await createAdminClient()
      .from('site_settings')
      .upsert(next, { onConflict: 'id' })
      .select()
      .single();

    if (!error && data) {
      const saved = { ...defaultSettings, ...(data as MaintenanceSettings) };
      await writeFallbackSettings(saved);
      return saved;
    }
  } catch {
    // Fall back to local file if Supabase table is not yet migrated
  }

  await writeFallbackSettings(next);
  return next;
}
