export const ADMIN_SESSION_MAX_AGE_MS = 8 * 60 * 60 * 1000;

function tokenIssuedAt(accessToken: string) {
  try {
    const payload = accessToken.split('.')[1];
    const decoded = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/'))) as { iat?: number };
    return typeof decoded.iat === 'number' ? decoded.iat * 1000 : null;
  } catch {
    return null;
  }
}

export function adminSessionRemaining(accessToken: string) {
  const issuedAt = tokenIssuedAt(accessToken);
  return issuedAt === null ? ADMIN_SESSION_MAX_AGE_MS : Math.max(0, issuedAt + ADMIN_SESSION_MAX_AGE_MS - Date.now());
}