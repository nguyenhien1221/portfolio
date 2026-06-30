const skills = [
  { label: 'ReactJS / Next.js', value: 95 },
  { label: 'HTML / CSS / Tailwind', value: 92 },
  { label: 'Web3 / Blockchain', value: 85 },
  { label: 'NestJS / Backend', value: 90 },
];

const tags = ['Ethers.js', 'Solidity', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL'];

const CodeIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M16 18l6-6-6-6M8 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const FrontendArchitecture = () => {
  return (
    <article className="rounded-lg border border-white/10 bg-panel p-6 lg:p-8">
      <div className="mb-8 flex items-center gap-3 text-accent">
        <CodeIcon />
        <h2 className="text-lg font-bold text-white">Frontend Architecture</h2>
      </div>

      <ul className="space-y-5">
        {skills.map(({ label, value }) => (
          <li key={label}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-fg">{label}</span>
              <span className="font-mono text-accent">{value}%</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${value}%` }}
              />
            </div>
          </li>
        ))}
      </ul>

      <ul className="mt-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded border border-white/10 bg-ink/50 px-2.5 py-1 font-mono text-[11px] tracking-wide text-fg/80"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default FrontendArchitecture;
