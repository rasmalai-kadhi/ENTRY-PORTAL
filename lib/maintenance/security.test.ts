import { describe, expect, it } from 'vitest';
import {
  DEFAULT_MAINTENANCE_PASSWORD,
  createBypassToken,
  hashPassword,
  verifyBypassToken,
  verifyPassword,
} from './security';

describe('maintenance security', () => {
  it('verifies default password when expectedHash is empty', async () => {
    expect(await verifyPassword(DEFAULT_MAINTENANCE_PASSWORD)).toBe(true);
    expect(await verifyPassword('wrongpassword')).toBe(false);
  });

  it('verifies custom password against hash', async () => {
    const customHash = await hashPassword('my-secret-pass-2026');
    expect(await verifyPassword('my-secret-pass-2026', customHash)).toBe(true);
    expect(await verifyPassword('wrong-pass', customHash)).toBe(false);
  });

  it('creates and verifies a valid bypass token', async () => {
    const token = await createBypassToken();
    expect(await verifyBypassToken(token)).toBe(true);
  });

  it('rejects tampered or expired tokens', async () => {
    const token = await createBypassToken();
    const tampered = token.slice(0, -4) + 'abcd';
    expect(await verifyBypassToken(tampered)).toBe(false);
    expect(await verifyBypassToken('')).toBe(false);
    expect(await verifyBypassToken('12345')).toBe(false);

    // Expired token
    const expiredToken = await createBypassToken(-1000);
    expect(await verifyBypassToken(expiredToken)).toBe(false);
  });
});
