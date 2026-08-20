"use client";
export default function SuccessPage() {
  return (
    <main className="success-page">
      <section className="success-panel" aria-labelledby="success-title">
        <div className="success-mark" aria-hidden="true"><span>✓</span></div>
        <h1 id="success-title">Form submitted successfully.</h1>
      </section>
    </main>
  );
}
