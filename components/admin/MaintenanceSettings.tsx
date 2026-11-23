'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Toast } from '@/components/ui/Toast';
import type { MaintenanceSettings as Settings } from '@/lib/site-settings-shared';
import { isMaintenanceActive, isMaintenanceScheduled } from '@/lib/site-settings-shared';

function localDateTime(value: string | null) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 16);
}

function formatDate(value: string | null) {
  return value
    ? new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value))
    : 'Not set';
}

function isoDateTime(value: string) {
  return value ? new Date(value).toISOString() : null;
}

export function MaintenanceSettings() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [message, setMessage] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [passwordProtection, setPasswordProtection] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [hasCustomPassword, setHasCustomPassword] = useState(false);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState<{ text: string; error?: boolean } | null>(null);

  useEffect(() => {
    fetch('/api/admin/settings', { cache: 'no-store' })
      .then(async (response) => {
        if (!response.ok) throw new Error();
        const data = (await response.json()) as Settings & { has_custom_password?: boolean };
        setSettings(data);
        setEnabled(data.maintenance_enabled);
        setMessage(data.maintenance_message ?? '');
        setStart(localDateTime(data.maintenance_start));
        setEnd(localDateTime(data.maintenance_end));
        setPasswordProtection(data.password_protection_enabled ?? true);
        setHasCustomPassword(Boolean(data.has_custom_password));
      })
      .catch(() => setNotice({ text: 'Unable to load maintenance settings.', error: true }));
  }, []);

  async function save() {
    if (saving) return;
    setSaving(true);
    setNotice(null);
    try {
      const payload: Record<string, unknown> = {
        maintenance_enabled: enabled,
        maintenance_message: message,
        maintenance_start: isoDateTime(start),
        maintenance_end: isoDateTime(end),
        password_protection_enabled: passwordProtection,
      };

      if (newPassword.trim().length > 0) {
        if (newPassword.trim().length < 4) {
          throw new Error('Password must be at least 4 characters.');
        }
        payload.maintenance_password = newPassword.trim();
      }

      const response = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as Settings & { error?: string; has_custom_password?: boolean };
      if (!response.ok) throw new Error(result.error || 'Unable to save maintenance settings.');

      setSettings(result);
      setHasCustomPassword(Boolean(result.has_custom_password));
      setNewPassword('');
      setNotice({ text: 'Maintenance settings saved.' });
    } catch (error) {
      setNotice({
        text: error instanceof Error ? error.message : 'Unable to save maintenance settings.',
        error: true,
      });
    } finally {
      setSaving(false);
    }
  }

  const status = !settings
    ? 'Loading'
    : isMaintenanceActive(settings)
    ? 'Active'
    : isMaintenanceScheduled(settings)
    ? 'Scheduled'
    : 'Off';

  return (
    <section className="admin-content-card maintenance-settings">
      <div className="settings-section-heading">
        <div>
          <p className="eyebrow">Public enquiry form</p>
          <h2>Maintenance Mode &amp; Access</h2>
          <p>Temporarily pause new submissions while keeping the admin panel and staff bypass available.</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Link href="/admin/maintenance" className="preview-maintenance-link">
            <span>Open Dedicated Page</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <span className={`status-badge maintenance-status-${status.toLowerCase()}`}>{status}</span>
        </div>
      </div>

      {notice && <Toast message={notice.text} error={notice.error} onClose={() => setNotice(null)} />}

      <div className="maintenance-form-grid">
        <label className="maintenance-toggle full-col">
          <input
            type="checkbox"
            checked={enabled}
            onChange={(event) => setEnabled(event.target.checked)}
            disabled={!settings || saving}
          />
          <span>
            <strong>Maintenance Mode</strong>
            <small>Scheduled windows use the server clock and UTC timestamps.</small>
          </span>
        </label>

        <label className="full-col">
          Notice message
          <textarea
            value={message}
            maxLength={500}
            onChange={(event) => setMessage(event.target.value)}
            disabled={!settings || saving}
            placeholder="We are updating the enquiry portal."
          />
        </label>

        <label>
          Scheduled start
          <input
            type="datetime-local"
            value={start}
            onChange={(event) => setStart(event.target.value)}
            disabled={!settings || saving}
          />
        </label>

        <label>
          Scheduled end
          <input
            type="datetime-local"
            value={end}
            onChange={(event) => setEnd(event.target.value)}
            disabled={!settings || saving}
          />
        </label>

        <label className="maintenance-toggle full-col">
          <input
            type="checkbox"
            checked={passwordProtection}
            onChange={(event) => setPasswordProtection(event.target.checked)}
            disabled={!settings || saving}
          />
          <span>
            <strong>Password Protection Bypass</strong>
            <small>
              Allow staff and testers to unlock the portal using a password on <code>/maintenance</code>.
              {hasCustomPassword ? ' (Custom password active)' : ' (Default: eduspray2026)'}
            </small>
          </span>
        </label>

        {passwordProtection && (
          <label className="full-col">
            Update Maintenance Bypass Password
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder={hasCustomPassword ? 'Leave blank to keep existing password' : 'Enter new password (min. 4 chars)'}
              disabled={!settings || saving}
              autoComplete="new-password"
            />
          </label>
        )}
      </div>

      <p className="maintenance-current-status">
        <strong>Current status:</strong> {status}.{' '}
        <span>Start: {formatDate(settings?.maintenance_start ?? null)}. End: {formatDate(settings?.maintenance_end ?? null)}.</span>
      </p>

      <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
        <Button onClick={save} disabled={!settings || saving}>
          {saving ? (
            <>
              <span className="submit-spinner" aria-hidden="true" />
              Saving...
            </>
          ) : (
            'Save Changes'
          )}
        </Button>
        <Link href="/maintenance" target="_blank" rel="noopener noreferrer" className="maint-btn-secondary" style={{ padding: '9px 18px', textDecoration: 'none' }}>
          Preview Public Page
        </Link>
      </div>
    </section>
  );
}