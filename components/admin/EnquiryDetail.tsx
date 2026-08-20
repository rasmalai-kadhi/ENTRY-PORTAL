'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Detail = Record<string, string | null> & { id: string; enquiry_number: string; pdf_storage_path: string; created_at: string; status: string };
const hidden = new Set(['id', 'pdf_storage_path', 'signatureDataUrl']);
export function EnquiryDetail({ id }: { id: string }) {
  const router = useRouter(); const [data, setData] = useState<Detail | null>(null);
  useEffect(() => { fetch(`/api/admin/enquiries/${id}`).then(async response => { if (response.status === 401) router.replace('/admin/login'); else if (response.ok) setData((await response.json()).data); }); }, [id, router]);
  if (!data) return <main className="container admin-shell"><p>Loading...</p></main>;
  return <main className="container admin-shell"><header className="admin-header"><div><Link href="/admin/enquiries">Enquiries</Link><h1>{data.enquiry_number}</h1></div><div className="actions"><a className="btn-secondary" href={`/api/admin/enquiries/${id}/download`}>Download PDF</a><a className="btn-primary" href={`/api/admin/enquiries/${id}/pdf`} target="_blank" rel="noreferrer">Print PDF</a></div></header><div className="detail-layout"><section className="card"><h2>Submitted data</h2><dl>{Object.entries(data).filter(([key]) => !hidden.has(key)).map(([key, value]) => <div className="data-row" key={key}><dt>{key}</dt><dd>{value ?? ''}</dd></div>)}</dl></section><section className="pdf-panel"><iframe title="Generated enquiry PDF" src={`/api/admin/enquiries/${id}/pdf`} /></section></div></main>;
}
