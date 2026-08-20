import { getClientIp } from '@/lib/request/client-ip';
import type { RequestHeaders } from '@/lib/request/client-ip';

export function SiteHeader({ requestHeaders }: { requestHeaders: RequestHeaders }) {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a className="site-brand" href="/enquiry">Eduspray Enquiry Form</a>
        <span className="client-ip" title="Your network address">IP: {getClientIp(requestHeaders)}</span>
      </div>
    </header>
  );
}
