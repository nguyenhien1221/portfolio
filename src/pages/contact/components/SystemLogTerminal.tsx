const LocationIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

const EmailIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 6h16v12H4V6z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const SystemLogTerminal = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-panel shadow-[0_0_40px_rgba(0,245,255,0.06)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-panel-header px-4 py-3">
        <div className="flex gap-2">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-xs text-accent">SYSTEM_LOG.V1</span>
      </div>

      <div className="space-y-5 p-6 font-mono text-sm leading-relaxed">
        <div>
          <p className="text-accent">
            <span className="text-muted">$ </span>locate user
          </p>
          <p className="mt-2 text-muted">Searching internal GPS cluster...</p>
        </div>

        <div className="flex gap-3">
          <span className="mt-0.5 shrink-0 text-accent">
            <LocationIcon />
          </span>
          <div>
            <p className="text-fg/90">Hanoi, Vietnam</p>
            <p className="text-muted">Hybrid / Remote Available</p>
          </div>
        </div>

        <div className="flex gap-3">
          <span className="mt-0.5 shrink-0 text-accent">
            <EmailIcon />
          </span>
          <div>
            <p className="text-fg/90">nguyenhien1221@gmail.com</p>
          </div>
        </div>

        <p className="text-accent">
          <span className="text-muted">$ </span>awaiting_input
          <span className="cursor-blink ml-1 inline-block h-4 w-2 translate-y-0.5 bg-accent" />
        </p>
      </div>
    </div>
  );
}

export default SystemLogTerminal;
