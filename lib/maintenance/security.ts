export const DEFAULT_MAINTENANCE_PASSWORD = 'eduspray2026';
export const MAINTENANCE_BYPASS_COOKIE = 'eduspray_maintenance_bypass';

const SALT = 'eduspray_maint_security_salt_2026';

export async function hashPassword(password: string): Promise<string> {
  const enc = new TextEncoder();
  const data = enc.encode(`${SALT}:${password.trim()}`);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function verifyPassword(password: string, expectedHash?: string | null): Promise<boolean> {
  const trimmed = (password ?? '').trim();
  if (!trimmed) return false;
  const computedHash = await hashPassword(trimmed);
  if (!expectedHash || expectedHash.trim() === '') {
    const defaultHash = await hashPassword(DEFAULT_MAINTENANCE_PASSWORD);
    return computedHash === defaultHash;
  }
  return computedHash === expectedHash.trim();
}

function getSecretKey(): string {
  return process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || 'eduspray-maint-secret-key-fallback';
}

export async function createBypassToken(ttlMs = 24 * 60 * 60 * 1000): Promise<string> {
  const expiresAt = Date.now() + ttlMs;
  const payload = `bypass:${expiresAt}`;
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(getSecretKey()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
  const sigHex = Array.from(new Uint8Array(signature)).map(b => b.toString(16).padStart(2, '0')).join('');
  return `${expiresAt}.${sigHex}`;
}

export async function verifyBypassToken(token: string | null | undefined): Promise<boolean> {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [expiresAtStr, sigHex] = parts;
  const expiresAt = Number(expiresAtStr);
  if (Number.isNaN(expiresAt) || Date.now() > expiresAt) return false;

  const payload = `bypass:${expiresAt}`;
  const enc = new TextEncoder();
  try {
    const key = await crypto.subtle.importKey(
      'raw',
      enc.encode(getSecretKey()),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );
    const match = sigHex.match(/.{1,2}/g);
    if (!match) return false;
    const sigBytes = new Uint8Array(match.map(byte => parseInt(byte, 16)));
    return await crypto.subtle.verify('HMAC', key, sigBytes, enc.encode(payload));
  } catch {
    return false;
  }
}
