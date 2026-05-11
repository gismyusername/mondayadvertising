const partners = [
  "Meta",
  "Google Ads",
  "TikTok",
  "Binom",
  "Voluum",
  "Keitaro",
];

export function TrustBar() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02]">
      <div className="container-x py-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        <span className="text-xs uppercase tracking-wider text-white/40">
          Works with
        </span>
        {partners.map((p) => (
          <span
            key={p}
            className="text-sm md:text-base font-medium text-white/60 hover:text-white/90 transition"
          >
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}
