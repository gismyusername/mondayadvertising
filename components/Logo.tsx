export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/logo.png"
        alt="Monday Advertising"
        width={32}
        height={32}
        className="h-8 w-8 rounded-lg shrink-0"
      />
      <span className="font-display font-semibold tracking-tight text-white">
        Monday<span className="text-brand-300">.</span>Advertising
      </span>
    </div>
  );
}
