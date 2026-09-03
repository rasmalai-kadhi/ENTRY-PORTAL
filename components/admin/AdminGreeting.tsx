'use client';

import { useEffect, useState } from 'react';
import { greetingForLocalHour } from '@/lib/greetings';

function extractNameFromEmail(email: string): string {
  if (!email) return 'admin';
  // Extract the part before @ symbol
  const localPart = email.split('@')[0];
  // Replace dots and underscores with spaces
  const withSpaces = localPart.replace(/[._-]/g, ' ');
  // Capitalize each word
  return withSpaces
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .filter(word => word.length > 0)
    .slice(0, 2) // Take only first two words
    .join(' ');
}

export function AdminGreeting({ email = '', displayName = '' }: { email?: string; displayName?: string }) {
  const [greeting, setGreeting] = useState('Good Morning');
  const adminName = displayName || extractNameFromEmail(email);

  useEffect(() => {
    setGreeting(greetingForLocalHour(new Date().getHours()));
  }, []);

  return <>{greeting}, {adminName}</>;
}