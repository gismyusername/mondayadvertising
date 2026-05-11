export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-fade"
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 -z-10 h-[480px] w-[900px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(closest-side, #6b48ff, transparent)" }}
      />
      <div className="container-x pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-3xl">
          <span className="eyebrow">For media buyers · agencies · affiliates</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display font-semibold tracking-tight leading-[1.05]">
            <span className="gradient-text">Verified ad accounts</span>
            <br />
            with instant top-ups.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Scale on Meta and Google without bans, spending caps or payment
            failures. We supply trusted agency accounts and process top-ups in
            minutes — by USDT/USDC or wire.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Request access
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10m0 0L8 3m5 5l-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#how" className="btn-ghost">How it works</a>
          </div>

          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {[
              ["$12M+", "Ad spend processed"],
              ["600+", "Accounts delivered"],
              ["< 15 min", "Avg. top-up time"],
              ["24/7", "Manager support"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-2xl font-semibold text-white">{v}</dt>
                <dd className="text-xs uppercase tracking-wider text-white/50 mt-1">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
