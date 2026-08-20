export type RequestHeaders = Pick<globalThis.Headers, 'get'>;

export function getClientIp(headers: RequestHeaders): string {
  const forwarded = headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim()
    ?? headers.get('x-real-ip')
    ?? headers.get('cf-connecting-ip');

  return ip || 'Unavailable';
}
