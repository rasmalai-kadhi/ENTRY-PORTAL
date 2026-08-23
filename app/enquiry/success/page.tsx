"use client";
export default function SuccessPage() {
  return (
    <main className="success-page">
      <section className="success-panel" aria-labelledby="success-title">
        <div className="success-mark" aria-hidden="true"><span>✓</span></div>
        <p className="success-kicker">Form submitted successfully.</p>
        <h1 id="success-title">Your first step towards a bright future with Eduspray has been taken.</h1>
      </section>
    </main>
  );
}
