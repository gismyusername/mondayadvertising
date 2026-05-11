import Link from "next/link";
import { Logo } from "./Logo";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How it works" },
  { href: "#payments", label: "Payments" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-ink-900/70 border-b border-white/5">
      <div className="container-x flex items-center justify-between h-16">
        <Link href="/" aria-label="Monday Advertising home">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-white/70 hover:text-white transition"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex btn-ghost">
            Sign in
          </a>
          <a href="#contact" className="btn-primary">
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
