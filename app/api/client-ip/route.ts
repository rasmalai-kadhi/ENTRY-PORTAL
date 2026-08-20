import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { getClientIp } from '@/lib/request/client-ip';

export async function GET() {
  return NextResponse.json({ ip: getClientIp(await headers()) }, { headers: { 'Cache-Control': 'no-store' } });
}
