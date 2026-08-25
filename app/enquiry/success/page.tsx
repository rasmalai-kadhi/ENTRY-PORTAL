"use client";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
export default function SuccessPage() {
  const [enquiryNumber, setEnquiryNumber] = useState('');
  useEffect(() => {
    setEnquiryNumber(sessionStorage.getItem('eduspray-enquiry-number') || '');
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) void confetti({ particleCount: 120, spread: 75, origin: { y: 0.65 } });
  }, []);
  return (
    <main className="success-page">
      <section className="success-panel" aria-labelledby="success-title">
        <div className="success-mark" aria-hidden="true"><span>✓</span></div>
        <p className="success-kicker">Form submitted successfully.</p>
        <h1 id="success-title">You've officially taken the first step toward a bright future with Eduspray.</h1>
        {enquiryNumber && <p className="success-copy">Enquiry number: <strong>{enquiryNumber}</strong></p>}
      </section>
    </main>
  );
}
