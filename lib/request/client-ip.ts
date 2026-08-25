import 'server-only';
import { isIP } from 'node:net';

export type RequestHeaders = Pick<globalThis.Headers, 'get'>;

export type ClientIpResult = { ip: string; source: string; environment: string };

function normalize(value: string) {
  const candidate = value.trim().replace(/^\[|\]$/g, '').replace(/^::ffff:/i, '');
  return isIP(candidate) ? candidate : null;
}

export function detectClientIp(headers: RequestHeaders): ClientIpResult {
  const environment = process.env.NODE_ENV ?? 'development';
  const trustedHeaders = (process.env.TRUSTED_PROXY_HEADERS ?? 'cf-connecting-ip,x-real-ip').split(',').map(value => value.trim()).filter(Boolean);
  const headerValues = new Map<string, string | null>([
    ['cf-connecting-ip', headers.get('cf-connecting-ip')],
    ['true-client-ip', headers.get('true-client-ip')],
    ['x-real-ip', headers.get('x-real-ip')],
    ['x-forwarded-for', headers.get('x-forwarded-for')],
  ]);
  let ip: string | null = null;
  let source = 'proxy-ip-unavailable';
  for (const header of trustedHeaders) {
    const raw = headerValues.get(header);
    const candidate = raw?.split(',')[0] ? normalize(raw.split(',')[0]) : null;
    if (candidate) { ip = candidate; source = header; break; }
  }
  if (!ip && environment !== 'production') {
    const local = normalize(headers.get('x-forwarded-for')?.split(',')[0] ?? '') ?? normalize(headers.get('x-real-ip') ?? '');
    if (local === '::1' || local === '127.0.0.1') { ip = local; source = 'local-development'; }
  }
  if (ip === '::1' || ip === '127.0.0.1') { ip = 'localhost'; source = 'local-development'; }
  const result = { ip: ip ?? 'proxy-ip-unavailable', source, environment };
  console.info('CLIENT_IP_DETECTED', { ...result, relevantProxyHeader: source.includes('-') ? headers.get(source) : null, forwarded: headers.get('x-forwarded-for') ?? null });
  return result;
}

export function getClientIp(headers: RequestHeaders): string {
  return detectClientIp(headers).ip;
}
