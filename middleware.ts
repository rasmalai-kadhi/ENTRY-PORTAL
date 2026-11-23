import { type NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll().map(cookie => ({
            name: cookie.name,
            value: cookie.value,
          }));
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    },
  );

  // Refresh the auth session - this will update the session in cookies if needed
  const { data: { user } } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;
  const authHeader = request.headers.get('authorization');
  const hasBearerToken = Boolean(authHeader && authHeader.toLowerCase().startsWith('bearer '));

  // Protect /api/admin/* endpoints
  if (pathname.startsWith('/api/admin')) {
    // GET /api/admin/session is used to check current session status
    const isSessionStatusCheck = pathname === '/api/admin/session' && request.method === 'GET';
    if (!isSessionStatusCheck && !user && !hasBearerToken) {
      return NextResponse.json(
        { error: 'Unauthorized: Authentication token or session required.' },
        { status: 401, headers: { 'Cache-Control': 'no-store' } }
      );
    }
  }

  // Protect /admin/* UI routes (redirect unauthenticated users to /admin/login)
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    if (!user) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
