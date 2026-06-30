const tools = [
  'Git / GitHub Actions',
  'AWS S3 / Vercel',
  'Figma / Storybook',
  'Lighthouse / Web Vitals',
  'Jest / Cypress',
];

const StackAuditTerminal = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-panel shadow-[0_0_40px_rgba(0,245,255,0.06)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-panel-header px-4 py-3">
        <div className="flex gap-2">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-xs text-muted">bash — STACK-AUDIT</span>
      </div>

      <div className="space-y-4 p-6 font-mono text-sm leading-relaxed">
        <p className="text-accent">
          <span className="text-muted">$ </span>ls ./ecosystem/tools
        </p>
        <ul className="space-y-2 text-fg/90">
          {tools.map((tool) => (
            <li key={tool} className="flex items-center gap-2">
              <span className="text-accent">▸</span>
              {tool}
            </li>
          ))}
        </ul>
        <p className="text-accent">
          <span className="text-muted">$ </span>
          <span className="cursor-blink inline-block h-4 w-2 translate-y-0.5 bg-accent" />
        </p>
      </div>
    </div>
  );
}

export default StackAuditTerminal;
