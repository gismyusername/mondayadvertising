const services = [
  {
    badge: "Meta",
    title: "Meta Ads agency accounts",
    description:
      "Verified business managers with high trust score and no daily spending limit. Linked to whitelisted profiles, ready to launch campaigns the same day.",
    bullets: [
      "Unlimited daily spend",
      "No moderation queue",
      "Multi-currency: USD · EUR · GBP",
      "Replacement guarantee on bans",
    ],
    accent: "from-blue-500/30 to-brand-500/30",
  },
  {
    badge: "Google",
    title: "Google Ads MCC accounts",
    description:
      "Aged Google Ads accounts under our agency MCC. Bypass the new-account spending caps and reach your daily budget from day one.",
    bullets: [
      "Pre-warmed, aged accounts",
      "Direct invoicing supported",
      "Search · Display · YouTube · PMax",
      "Dedicated account manager",
    ],
    accent: "from-emerald-500/30 to-brand-500/30",
  },
  {
    badge: "Top-up",
    title: "Instant top-up service",
    description:
      "Fund any of your ad accounts in minutes. We accept crypto and bank transfers, convert at transparent rates and credit your balance fast.",
    bullets: [
      "Crypto: USDT · USDC",
      "SEPA & SWIFT wire transfers",
      "Average top-up time < 15 min",
      "Real-time balance tracking",
    ],
    accent: "from-fuchsia-500/30 to-brand-500/30",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Services</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-semibold tracking-tight">
            Everything you need to spend at scale.
          </h2>
          <p className="mt-4 text-white/60">
            Two product lines, one operator. Pick the platform — we handle the
            account, the moderation, the payments and the support.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card p-6 relative overflow-hidden">
              <div
                aria-hidden
                className={`absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl bg-gradient-to-br ${s.accent}`}
              />
              <div className="relative">
                <span className="eyebrow">{s.badge}</span>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-white/60">{s.description}</p>
                <ul className="mt-5 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-white/80">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 text-brand-300 shrink-0">
                        <path d="M3 8.5L6.5 12 13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
