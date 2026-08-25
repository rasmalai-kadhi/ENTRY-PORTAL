'use client';

import { useEffect } from 'react';

type ToastProps = { message: string; error?: boolean; severity?: 'success' | 'error' | 'warning' | 'info'; onClose: () => void };

export function Toast({ message, error = false, severity, onClose }: ToastProps) {
  useEffect(() => {
    const timer = window.setTimeout(onClose, 5000);
    return () => window.clearTimeout(timer);
  }, [message, onClose]);

  const kind = severity ?? (error ? 'error' : 'success');
  const icons = { success: '✓', error: '!', warning: '!', info: 'i' };
  return <div className={`app-toast app-toast-${kind}`} role={kind === 'error' || kind === 'warning' ? 'alert' : 'status'}><span className="app-toast-icon" aria-hidden="true">{icons[kind]}</span><span>{message}</span><button type="button" aria-label="Close notification" onClick={onClose}>×</button></div>;
}
