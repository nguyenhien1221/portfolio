const DeveloperStatsTerminal = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 border-l-2 border-l-accent bg-panel shadow-[0_0_40px_rgba(0,245,255,0.06)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-panel-header px-4 py-3">
        <div className="flex gap-2">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-xs text-muted">developer-stats.sh</span>
      </div>

      <div className="space-y-3 p-6 font-mono text-sm leading-relaxed">
        <p className="text-accent">
          <span className="text-muted">$ </span>status --detailed
        </p>
        <div className="space-y-1.5 text-fg/90">
          <p>
            <span className="text-muted">Total Projects Completed: </span>
            <span className="text-white">42</span>
          </p>
          <p>
            <span className="text-muted">Average Performance Score: </span>
            <span className="text-accent">98%</span>
          </p>
          <p>
            <span className="text-muted">Primary Stack: </span>
            <span className="text-white">React / Node.js / PostgreSQL / K8s</span>
          </p>
        </div>
        <p className="text-accent">
          <span className="text-muted">$ </span>
          <span className="cursor-blink inline-block h-4 w-2 translate-y-0.5 bg-accent" />
        </p>
      </div>
    </div>
  );
}

export default DeveloperStatsTerminal;
