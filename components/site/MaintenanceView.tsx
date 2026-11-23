'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { MaintenanceSettings } from '@/lib/site-settings-shared';
import { isMaintenanceActive, isMaintenanceScheduled } from '@/lib/site-settings-shared';

interface MaintenanceViewProps {
  settings: MaintenanceSettings;
  initialIsBypassed: boolean;
}

function formatDateTime(value: string | null) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

export function MaintenanceView({ settings, initialIsBypassed }: MaintenanceViewProps) {
  const router = useRouter();
  const [isBypassed, setIsBypassed] = useState(initialIsBypassed);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRevoking, setIsRevoking] = useState(false);
  const [, startTransition] = useTransition();

  const active = isMaintenanceActive(settings);
  const scheduled = isMaintenanceScheduled(settings);
  const returnTime = formatDateTime(settings.maintenance_end);
  const startTime = formatDateTime(settings.maintenance_start);

  async function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (!password.trim() || isSubmitting) return;

    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/maintenance/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setErrorMsg(data.error || 'Incorrect password. Please try again.');
        setIsSubmitting(false);
        return;
      }

      setIsBypassed(true);
      startTransition(() => {
        router.push(data.redirect || '/');
        router.refresh();
      });
    } catch {
      setErrorMsg('Failed to verify password. Please check your network connection.');
      setIsSubmitting(false);
    }
  }

  async function handleRevoke() {
    if (isRevoking) return;
    setIsRevoking(true);
    try {
      await fetch('/api/maintenance/revoke', { method: 'POST' });
      setIsBypassed(false);
      setPassword('');
      startTransition(() => {
        router.refresh();
      });
    } catch {
      // ignore
    } finally {
      setIsRevoking(false);
    }
  }

  return (
    <div className="maintenance-wrapper">
      {/* Decorative background effects */}
      <div className="maintenance-glow-orb maintenance-glow-1" aria-hidden="true" />
      <div className="maintenance-glow-orb maintenance-glow-2" aria-hidden="true" />

      <main className="container maintenance-container" id="main-content">
        <div className="maintenance-card">
          {/* Status Header Badge */}
          <div className="maintenance-status-row">
            {active ? (
              <span className="maint-badge maint-badge-active">
                <span className="maint-pulse-dot" aria-hidden="true" />
                Maintenance Active
              </span>
            ) : scheduled ? (
              <span className="maint-badge maint-badge-scheduled">
                <span className="maint-pulse-dot scheduled" aria-hidden="true" />
                Scheduled Downtime
              </span>
            ) : (
              <span className="maint-badge maint-badge-operational">
                <span className="maint-pulse-dot operational" aria-hidden="true" />
                Systems Operational
              </span>
            )}

            <span className="maint-app-tag">Eduspray Portal</span>
          </div>

          {/* Hero Section */}
          <div className="maintenance-hero">
            <div className="maintenance-icon-wrap" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>

            <h1>
              {active
                ? "We're currently performing maintenance"
                : scheduled
                ? 'Scheduled maintenance upcoming'
                : 'Portal is currently online'}
            </h1>

            <p className="maintenance-lead">
              {active
                ? 'We are upgrading our systems to provide an improved enquiry and admissions experience. Normal services will resume shortly.'
                : scheduled
                ? `The enquiry portal is scheduled for maintenance starting ${startTime ?? 'soon'}.`
                : 'All systems are operating normally. You can proceed directly to the enquiry form.'}
            </p>
          </div>

          {/* Notice Banner */}
          {settings.maintenance_message && (
            <div className="maintenance-notice-box" role="region" aria-label="Maintenance Announcement">
              <div className="maint-notice-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div className="maint-notice-body">
                <strong>Admin Announcement:</strong>
                <p>{settings.maintenance_message}</p>
              </div>
            </div>
          )}

          {/* Time Schedule Details */}
          {(startTime || returnTime) && (
            <div className="maintenance-schedule-grid">
              {startTime && (
                <div className="maint-schedule-card">
                  <span className="maint-schedule-label">Started</span>
                  <span className="maint-schedule-val">{startTime}</span>
                </div>
              )}
              {returnTime && (
                <div className="maint-schedule-card highlight">
                  <span className="maint-schedule-label">Estimated Return</span>
                  <span className="maint-schedule-val">{returnTime}</span>
                </div>
              )}
            </div>
          )}

          {/* If Inactive: quick link to form */}
          {!active && (
            <div className="maint-operational-actions">
              <Link href="/" className="maint-btn-primary">
                Open Enquiry Form
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}

          {/* Password Protection / Staff Access Box */}
          {active && settings.password_protection_enabled && (
            <section className="maintenance-auth-section" aria-label="Staff Maintenance Bypass">
              <div className="maint-auth-card">
                <div className="maint-auth-header">
                  <div className="maint-auth-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div>
                    <h2>Authorized Staff Access</h2>
                    <p>Enter the bypass password to access and test the portal during maintenance.</p>
                  </div>
                </div>

                {isBypassed ? (
                  <div className="maint-unlocked-state">
                    <div className="maint-unlocked-badge">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Bypass Clearance Active</span>
                    </div>
                    <p className="maint-unlocked-text">
                      You have verified access. You can now use the full enquiry portal while maintenance is in progress.
                    </p>
                    <div className="maint-unlocked-actions">
                      <Link href="/" className="maint-btn-primary">
                        Enter Enquiry Portal
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <button
                        type="button"
                        onClick={handleRevoke}
                        disabled={isRevoking}
                        className="maint-btn-secondary"
                      >
                        {isRevoking ? 'Re-locking...' : 'Exit Bypass / Re-lock'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleUnlock} className="maint-password-form" noValidate>
                    {errorMsg && (
                      <div className="maint-error-banner" role="alert">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="maint-input-group">
                      <label htmlFor="current-password" className="maint-label">
                        Maintenance Access Password
                      </label>
                      <div className="maint-input-wrapper">
                        <input
                          id="current-password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          autoComplete="current-password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter access password"
                          className="maint-input"
                          disabled={isSubmitting}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="maint-toggle-visibility"
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                          tabIndex={-1}
                        >
                          {showPassword ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                              <line x1="1" y1="1" x2="23" y2="23" />
                            </svg>
                          ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !password.trim()}
                      className="maint-btn-primary maint-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="submit-spinner" aria-hidden="true" />
                          <span>Verifying Access...</span>
                        </>
                      ) : (
                        <>
                          <span>Unlock Enquiry Portal</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </section>
          )}

          {/* Footer note & legal links */}
          <footer className="maint-footer">
            <p>Need urgent admissions assistance? Please contact admissions support directly.</p>
            <div className="maint-links">
              <Link href="/terms">Terms of Use</Link>
              <span>•</span>
              <Link href="/privacy">Privacy Policy</Link>
              <span>•</span>
              <Link href="/admin/login">Admin Sign In</Link>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
