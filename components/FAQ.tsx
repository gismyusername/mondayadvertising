const faq = [
  {
    q: "Who is Monday Advertising for?",
    a: "Media buyers, agencies and affiliates who spend at least $5,000 a month on Meta or Google Ads and need reliable agency accounts to scale without hitting limits or bans.",
  },
  {
    q: "Are these accounts safe to use?",
    a: "Yes. Every account is provisioned through one of our agency partnerships, comes with a clean history and is linked to a profile we trust. We don't sell stolen or hacked accounts.",
  },
  {
    q: "What verticals do you allow?",
    a: "Most legitimate verticals — including gambling, betting, nutra, crypto, dating, e-commerce, lead-gen and white hat. We don't onboard anything illegal in the GEO it targets.",
  },
  {
    q: "How fast can I start spending?",
    a: "Same day in most cases. Onboarding is < 24 hours. Top-ups settle in under 15 minutes on average — faster with USDT, slower with SWIFT.",
  },
  {
    q: "What about refunds?",
    a: "Unspent balances on a banned account are migrated to a replacement free of charge within the first week. After that we follow our published refund policy.",
  },
  {
    q: "How are fees calculated?",
    a: "A flat commission on every top-up, with volume discounts. Your manager confirms the exact rate at onboarding — no hidden FX margin or setup fees.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 border-t border-white/5">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-display font-semibold tracking-tight">
              Frequently asked questions.
            </h2>
            <p className="mt-4 text-white/60">
              Can't find what you need? Email contact@mondayadvertising.com —
              we usually reply in under an hour.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-3">
            {faq.map((f) => (
              <details
                key={f.q}
                className="card p-5 group open:bg-white/[0.05]"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-brand-300 transition group-open:rotate-45 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-white/60">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
