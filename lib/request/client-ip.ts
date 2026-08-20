export type RequestHeaders = Pick<globalThis.Headers, 'get'>;

export function getClientIp(headers: RequestHeaders): string {
  const forwarded = headers.get('x-forwarded-for');
  const ip = headers.get('cf-connecting-ip')
    ?? headers.get('x-real-ip')
    ?? forwarded?.split(',')[0]?.trim();

  return ip || 'Unavailable';
}
