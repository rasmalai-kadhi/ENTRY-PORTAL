"use client";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import type { Metadata } from "next";

// Note: Metadata doesn't work in client components, but we can use dynamic title in the document
export default function SuccessPage() {
  const [enquiryNumber, setEnquiryNumber] = useState('');
  useEffect(() => {
    document.title = 'Submission Successful - Eduspray Enquiry Form';
    setEnquiryNumber(sessionStorage.getItem('eduspray-enquiry-number') || '');
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) void confetti({ particleCount: 120, spread: 75, origin: { y: 0.65 } });
  }, []);
  return (
    <main className="success-page">
      <section className="success-panel" aria-labelledby="success-title">
        <div className="success-mark" aria-hidden="true"><span>✓</span></div>
        <p className="success-kicker">Form submitted successfully.</p>
        <h1 id="success-title">Your journey to the right future starts here with <span>Eduspray.</span></h1>
        <div className="success-divider" aria-hidden="true"><span /></div>
        <div className="success-reference" aria-label={`Enquiry reference ${enquiryNumber || 'Pending'}`}>
          <span className="success-reference-icon" aria-hidden="true" />
          <span className="success-reference-label">Enquiry Reference:</span>
          <strong>{enquiryNumber || 'Pending'}</strong>
        </div>
      </section>
    </main>
  );
}
