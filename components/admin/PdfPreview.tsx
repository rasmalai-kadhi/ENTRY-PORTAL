'use client';

import { useEffect } from 'react';

type PdfPreviewProps = { url: string | null; pageNumber: number; width: number; height: number };

export function PdfPreview({ url, pageNumber, width, height }: PdfPreviewProps) {
  useEffect(() => () => {
    if (url) URL.revokeObjectURL(url);
  }, [url]);

  if (!url) return <div className="pdf-preview-loading">Generating preview...</div>;
  return <iframe className="pdf-preview-frame" title="Generated PDF preview" src={`${url}#page=${pageNumber}&toolbar=0`} style={{ width, height }} />;
}
