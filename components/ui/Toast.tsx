'use client';

import { useEffect } from 'react';

export function Toast({ message, error = false, onClose }: { message: string; error?: boolean; onClose: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onClose, 5000);
    return () => window.clearTimeout(timer);
  }, [message, onClose]);

  return <div className={`app-toast${error ? ' app-toast-error' : ''}`} role={error ? 'alert' : 'status'}><span>{message}</span><button type="button" aria-label="Close notification" onClick={onClose}>×</button></div>;
}
