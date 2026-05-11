export function CTA() {
  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="container-x">
        <div className="relative overflow-hidden card p-10 lg:p-16">
          <div
            aria-hidden
            className="absolute -top-32 -right-32 h-80 w-80 rounded-full blur-3xl bg-brand-500/40"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full blur-3xl bg-fuchsia-500/20"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight">
              Ready to scale without limits?
            </h2>
            <p className="mt-4 text-white/70">
              Tell us about your campaigns and we'll match you with the right
              accounts. No long onboarding forms — one email to a real manager.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:contact@mondayadvertising.com" className="btn-primary">
                contact@mondayadvertising.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
