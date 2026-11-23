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

export function AdminMaintenancePanel() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [message, setMessage] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [passwordProtection, setPasswordProtection] = useState(true);
  const [hasCustomPassword, setHasCustomPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
      setNotice({ text: 'Maintenance settings saved successfully.' });
    } catch (error) {
      setNotice({
        text: error instanceof Error ? error.message : 'Unable to save maintenance settings.',
        error: true,
      });
    } finally {
      setSaving(false);
    }
  }

  function setQuickDuration(minutes: number) {
    const now = new Date();
    const endWindow = new Date(now.getTime() + minutes * 60000);
    setStart(localDateTime(now.toISOString()));
    setEnd(localDateTime(endWindow.toISOString()));
    setEnabled(true);
  }

  function clearWindow() {
    setStart('');
    setEnd('');
  }

  const status = !settings
    ? 'Loading'
    : isMaintenanceActive(settings)
    ? 'Active'
    : isMaintenanceScheduled(settings)
    ? 'Scheduled'
    : 'Off';

  return (
    <section className="admin-content-card admin-maintenance-card">
      <div className="settings-section-heading">
        <div>
          <p className="eyebrow">Public Portal Availability</p>
          <h2>Maintenance Mode &amp; Access Controls</h2>
          <p>
            Pause public submissions during system upgrades while retaining authorized staff access via a password.
          </p>
        </div>
        <div className="status-badge-wrap">
          <span className={`status-badge maintenance-status-${status.toLowerCase()}`}>
            {status === 'Active' && <span className="maint-pulse-dot" aria-hidden="true" />}
            {status}
          </span>
          <Link
            href="/maintenance"
            target="_blank"
            rel="noopener noreferrer"
            className="preview-maintenance-link"
          >
            <span>Preview Page</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </Link>
        </div>
      </div>

      {notice && <Toast message={notice.text} error={notice.error} onClose={() => setNotice(null)} />}

      <div className="maintenance-form-grid">
        {/* Master Toggle */}
        <label className="maintenance-toggle full-col">
          <input
            type="checkbox"
            checked={enabled}
            onChange={(event) => setEnabled(event.target.checked)}
            disabled={!settings || saving}
          />
          <span>
            <strong>Enable Maintenance Mode</strong>
            <small>
              When enabled (or during a scheduled window), regular visitors visiting the portal will be redirected to the dedicated <code>/maintenance</code> page.
            </small>
          </span>
        </label>

        {/* Notice Message */}
        <label className="full-col">
          <span>Public Announcement Notice</span>
          <textarea
            value={message}
            maxLength={500}
            onChange={(event) => setMessage(event.target.value)}
            disabled={!settings || saving}
            placeholder="e.g. We are performing scheduled upgrades. The enquiry portal will be back online shortly."
            rows={3}
          />
          <small className="char-count">{message.length}/500 characters</small>
        </label>

        {/* Schedule Controls */}
        <div className="schedule-group full-col">
          <div className="schedule-header">
            <strong>Maintenance Window (Optional)</strong>
            <div className="quick-buttons">
              <button
                type="button"
                className="quick-btn"
                onClick={() => setQuickDuration(30)}
                disabled={!settings || saving}
              >
                +30m
              </button>
              <button
                type="button"
                className="quick-btn"
                onClick={() => setQuickDuration(60)}
                disabled={!settings || saving}
              >
                +1 Hour
              </button>
              <button
                type="button"
                className="quick-btn"
                onClick={() => setQuickDuration(120)}
                disabled={!settings || saving}
              >
                +2 Hours
              </button>
              {(start || end) && (
                <button
                  type="button"
                  className="quick-btn clear"
                  onClick={clearWindow}
                  disabled={!settings || saving}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="schedule-inputs-row">
            <label>
              <span>Scheduled start</span>
              <input
                type="datetime-local"
                value={start}
                onChange={(event) => setStart(event.target.value)}
                disabled={!settings || saving}
              />
            </label>
            <label>
              <span>Scheduled end</span>
              <input
                type="datetime-local"
                value={end}
                onChange={(event) => setEnd(event.target.value)}
                disabled={!settings || saving}
              />
            </label>
          </div>
          <small className="schedule-hint">
            Scheduled windows use server clock UTC. If left empty, maintenance activates immediately when the toggle is enabled.
          </small>
        </div>

        {/* Password Protection Section */}
        <div className="password-section full-col">
          <div className="password-section-header">
            <div className="pass-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div>
              <strong>Password Protection &amp; Staff Clearance</strong>
              <p>
                Allows staff, developers, and testers to unlock and test the enquiry portal during maintenance.
              </p>
            </div>
          </div>

          <label className="maintenance-toggle sub-toggle">
            <input
              type="checkbox"
              checked={passwordProtection}
              onChange={(e) => setPasswordProtection(e.target.checked)}
              disabled={!settings || saving}
            />
            <span>
              <strong>Allow Password Bypass on Maintenance Page</strong>
              <small>Displays a secure password prompt on <code>/maintenance</code> for authorized access.</small>
            </span>
          </label>

          {passwordProtection && (
            <div className="password-change-box">
              <div className="password-status-info">
                <span className="status-bullet" aria-hidden="true" />
                <span>
                  {hasCustomPassword ? (
                    <strong>Custom bypass password active</strong>
                  ) : (
                    <span>Default bypass password active (<code>eduspray2026</code>)</span>
                  )}
                </span>
              </div>

              <label className="password-input-field">
                <span>Set New Maintenance Password</span>
                <div className="pass-input-row">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder={hasCustomPassword ? 'Leave blank to keep existing password' : 'Enter new password (min. 4 chars)'}
                    disabled={!settings || saving}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="pass-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                <small>Enter a new password and click Save Changes to update the access key.</small>
              </label>
            </div>
          )}
        </div>
      </div>

      <div className="maintenance-footer-summary">
        <p className="maintenance-current-status">
          <strong>Current status:</strong> <span className={`status-text-${status.toLowerCase()}`}>{status}</span>
          <span className="dates-text">Start: {formatDate(settings?.maintenance_start ?? null)}. End: {formatDate(settings?.maintenance_end ?? null)}.</span>
        </p>

        <div className="actions-row">
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
        </div>
      </div>
    </section>
  );
}
