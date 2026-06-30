const BaseOfOperationsMap = () => {
  return (
    <section className="relative mt-16 overflow-hidden rounded-lg border border-white/10 lg:mt-20">
      <svg
        viewBox="0 0 1200 280"
        className="block w-full bg-[#0a1018]"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="1200" height="280" fill="url(#grid)" />

        <rect x="480" y="60" width="240" height="160" fill="rgba(255,255,255,0.03)" />
        <rect x="520" y="80" width="80" height="120" fill="rgba(255,255,255,0.04)" />
        <rect x="620" y="100" width="60" height="100" fill="rgba(255,255,255,0.04)" />
        <rect x="700" y="70" width="100" height="130" fill="rgba(255,255,255,0.03)" />

        <line x1="0" y1="140" x2="1200" y2="140" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <line x1="600" y1="0" x2="600" y2="280" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

        <circle cx="600" cy="140" r="6" fill="#00f5ff" opacity="0.9" />
        <circle cx="600" cy="140" r="14" fill="none" stroke="#00f5ff" strokeWidth="1" opacity="0.4" />
        <circle cx="600" cy="140" r="24" fill="none" stroke="#00f5ff" strokeWidth="0.5" opacity="0.2" />
      </svg>

      <div className="absolute bottom-4 left-4 rounded border border-white/10 bg-ink/90 px-4 py-2 backdrop-blur-sm">
        <p className="font-mono text-[11px] tracking-[0.15em] text-white">
          BASE OF OPERATIONS: NYC
        </p>
      </div>
    </section>
  );
}

export default BaseOfOperationsMap;
