const features = [
  {
    title: "No spending limits",
    body: "Our agency accounts carry no daily caps. Spend whatever your funnel can absorb — $1k or $100k a day.",
    icon: (
      <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    ),
  },
  {
    title: "Replacement guarantee",
    body: "If an account is banned within the first week, we replace it free of charge and migrate your remaining balance.",
    icon: (
      <path d="M4 12a8 8 0 0 1 14-5l2-2v6h-6l2-2a5 5 0 1 0 1 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Dedicated manager",
    body: "Every client gets a personal manager over email — no tickets, no bots. Real humans who run ads themselves.",
    icon: (
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 8a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    ),
  },
  {
    title: "Transparent pricing",
    body: "Clear commission on every top-up, no hidden FX spread, no setup fees. Volume discounts kick in automatically.",
    icon: (
      <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    ),
  },
  {
    title: "All verticals welcome",
    body: "Gambling, nutra, dating, crypto, e-commerce, white hat — we work with grown-up advertisers across the spectrum.",
    icon: (
      <path d="M3 12l4-4 4 4 4-4 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Same-day launch",
    body: "Apply in the morning, run traffic in the afternoon. We've cut onboarding to under 24 hours.",
    icon: (
      <path d="M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    ),
  },
];

export function Features() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Why Monday</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-semibold tracking-tight">
            Built by media buyers, for media buyers.
          </h2>
          <p className="mt-4 text-white/60">
            We've spent eight figures on paid acquisition ourselves. Every
            feature exists because we needed it on a campaign last quarter.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="card p-6">
              <div className="h-10 w-10 rounded-xl bg-brand-500/15 text-brand-300 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">{f.icon}</svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/60">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
