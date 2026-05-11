const steps = [
  {
    n: "01",
    title: "Apply",
    body: "Email us your vertical, GEOs and monthly volume. We reply within minutes during business hours.",
  },
  {
    n: "02",
    title: "Get matched",
    body: "Your account manager picks the right inventory — Meta BMs or Google MCC sub-accounts — and shares pricing and terms.",
  },
  {
    n: "03",
    title: "Top up",
    body: "Send USDT, USDC or a wire. We credit the ad account within minutes and confirm by message.",
  },
  {
    n: "04",
    title: "Launch & scale",
    body: "Your campaigns go live the same day. Replace banned accounts, request more budgets, ramp up volume with one operator.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 border-t border-white/5">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-semibold tracking-tight">
            From application to live campaign — same day.
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="card p-6">
              <div className="text-sm font-mono text-brand-300">{s.n}</div>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
