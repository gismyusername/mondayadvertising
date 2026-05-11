const methods = [
  { name: "USDT", subtitle: "TRC-20 · ERC-20 · BEP-20", color: "from-emerald-500/20 to-emerald-500/0" },
  { name: "USDC", subtitle: "ERC-20 · Polygon · Base", color: "from-sky-500/20 to-sky-500/0" },
  { name: "SEPA", subtitle: "EUR bank transfer", color: "from-indigo-500/20 to-indigo-500/0" },
  { name: "SWIFT wire", subtitle: "USD · EUR · GBP", color: "from-fuchsia-500/20 to-fuchsia-500/0" },
];

export function Payments() {
  return (
    <section id="payments" className="py-24 border-t border-white/5">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">Payments</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-display font-semibold tracking-tight">
              Top up your ad accounts the way you actually move money.
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl">
              Crypto for speed, bank transfers for volume. We confirm receipt
              automatically and credit your ad account before the kettle boils.
            </p>
          </div>
          <div className="lg:col-span-5 text-sm text-white/50">
            Minimum top-up <span className="text-white">$500</span> · settlement under
            <span className="text-white"> 15 minutes</span>.
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((m) => (
            <div key={m.name} className="card p-5 relative overflow-hidden">
              <div aria-hidden className={`absolute inset-0 bg-gradient-to-br ${m.color}`} />
              <div className="relative">
                <div className="text-lg font-semibold">{m.name}</div>
                <div className="text-xs text-white/50 mt-1">{m.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
