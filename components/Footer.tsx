import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <Logo />
          <p className="text-sm text-white/60 max-w-sm">
            Monday Advertising provides verified agency ad accounts and instant
            top-ups for media buyers, agencies and affiliates scaling on Meta
            and Google.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-wider text-white/40 mb-3">
            Product
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#services" className="hover:text-white">Meta Ads accounts</a></li>
            <li><a href="#services" className="hover:text-white">Google Ads accounts</a></li>
            <li><a href="#services" className="hover:text-white">Top-up service</a></li>
            <li><a href="#payments" className="hover:text-white">Payment methods</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-wider text-white/40 mb-3">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="mailto:contact@mondayadvertising.com" className="hover:text-white">contact@mondayadvertising.com</a></li>
            <li><a href="#contact" className="hover:text-white">Request access</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Monday Advertising. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">AML policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
