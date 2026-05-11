export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect width="32" height="32" rx="8" fill="url(#mg)" />
        <path
          d="M9 22V10l4 6 4-6 4 6V10"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="mg" x1="0" y1="0" x2="32" y2="32">
            <stop stopColor="#8d72ff" />
            <stop offset="1" stopColor="#4a25cc" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-display font-semibold tracking-tight text-white">
        Monday<span className="text-brand-300">.</span>Advertising
      </span>
    </div>
  );
}
