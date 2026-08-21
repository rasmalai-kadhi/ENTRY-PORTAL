import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { NextResponse } from 'next/server';
import { getAdminContext } from '@/lib/auth/admin';

export const runtime = 'nodejs';

export async function GET() {
  if (!await getAdminContext()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const bytes = await readFile(path.join(process.cwd(), 'private', 'templates', 'entry-form.pdf'));
  return new NextResponse(bytes, { headers: { 'Content-Type': 'application/pdf', 'Cache-Control': 'private, no-store' } });
}