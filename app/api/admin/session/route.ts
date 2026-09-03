import { NextResponse } from 'next/server';
import { getAdminContext } from '@/lib/auth/admin';

export async function GET() {
  const context = await getAdminContext();
  return NextResponse.json({
    authenticated: Boolean(context),
    email: context?.user.email ?? null,
    displayName: context?.admin.display_name ?? null,
  });
}

export async function PUT(request: Request) {
  try {
    const context = await getAdminContext();
    if (!context) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { displayName } = await request.json() as { displayName?: string };
    if (!displayName || typeof displayName !== 'string' || displayName.trim().length === 0) {
      return NextResponse.json({ error: 'Display name must be a non-empty string' }, { status: 400 });
    }

    const { error } = await context.supabase
      .from('admins')
      .update({ display_name: displayName.trim() })
      .eq('user_id', context.user.id);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({
      success: true,
      displayName: displayName.trim(),
    });
  } catch (error) {
    console.error('Error updating display name:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to update display name' },
      { status: 500 },
    );
  }
}


