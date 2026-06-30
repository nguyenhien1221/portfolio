const Terminal = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-panel shadow-[0_0_40px_rgba(0,245,255,0.08)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-panel-header px-4 py-3">
        <div className="flex gap-2">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-xs text-muted">about_me.sh</span>
      </div>

      <div className="space-y-5 p-6 font-mono text-sm leading-relaxed">
        <div>
          <p className="text-accent">
            <span className="text-muted">$ </span>cat bio.txt
          </p>
          <p className="mt-3 text-fg/90">
            I solve complex problems with elegant code. My approach is rooted in
            the belief that great engineering is invisible, manifesting only as
            seamless performance and intuitive flow across ReactJS, Next.js, and
            Web3 ecosystems.
          </p>
        </div>

        <div>
          <p className="text-accent">
            <span className="text-muted">$ </span>ls core_values/
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-fg/90 sm:grid-cols-2">
            <li>- ReactJS / Next.js</li>
            <li>- NestJS / Web3</li>
            <li>- Tailwind / CSS</li>
            <li>- HTML / Performance</li>
          </ul>
        </div>

        <p className="text-accent">
          <span className="text-muted">$ </span>
          <span className="cursor-blink inline-block h-4 w-2 translate-y-0.5 bg-accent" />
        </p>
      </div>
    </div>
  );
}

export default Terminal;
