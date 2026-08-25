'use client';

import { useEffect, useState } from 'react';
import { greetingForLocalHour } from '@/lib/greetings';

export function AdminGreeting() {
  const [greeting, setGreeting] = useState('Good Morning');
  useEffect(() => {
    setGreeting(greetingForLocalHour(new Date().getHours()));
  }, []);
  return <>{greeting}, admin.</>;
}