import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { detectClientIp } from '@/lib/request/client-ip';

export async function GET() {
  return NextResponse.json(detectClientIp(await headers()), { headers: { 'Cache-Control': 'no-store' } });
}
