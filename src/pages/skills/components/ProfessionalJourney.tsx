interface JourneyEntry {
  period: string;
  role: string;
  description: string;
  tags?: string[];
  isCurrent?: boolean;
}

const journey: JourneyEntry[] = [
  {
    period: '2022 — PRESENT',
    role: 'Senior Frontend Engineer // CloudNexus',
    description:
      'Leading frontend architecture for a multi-tenant SaaS platform. Built design systems, optimized Core Web Vitals, and integrated Web3 wallet flows across React and Next.js applications.',
    tags: ['Next.js', 'NestJS', 'Web3', 'Tailwind'],
    isCurrent: true,
  },
  {
    period: '2020 — 2022',
    role: 'UI/UX Developer // PixelForge Studio',
    description:
      'Translated Figma designs into responsive, accessible interfaces. Collaborated with designers to establish component libraries and motion guidelines for client deliverables.',
    tags: ['React', 'Figma', 'Storybook', 'GSAP'],
  },
  {
    period: '2018 — 2020',
    role: 'Frontend Intern & Developer // DevLaunch',
    description:
      'Shipped production features for e-commerce and dashboard products. Gained foundational experience in REST APIs, state management, and agile delivery workflows.',
    tags: ['JavaScript', 'Redux', 'REST', 'Jest'],
  },
  {
    period: '2014 — 2018',
    role: 'B.Sc. Computer Science // Tech University',
    description:
      'Focused on software engineering, algorithms, and human-computer interaction. Graduated with honors and completed a capstone project on real-time web applications.',
  },
];

const HistoryIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 12a9 9 0 101.5-4.5M3 4v5h5M12 7v5l3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ProfessionalJourney = () => {
  return (
    <section>
      <div className="mb-10 flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
          <HistoryIcon />
        </span>
        <h2 className="text-xl font-bold text-white sm:text-2xl">Professional Journey</h2>
      </div>

      <ol className="relative space-y-10 border-l border-white/10 pl-8">
        {journey.map(({ period, role, description, tags, isCurrent }) => (
          <li key={role} className="relative">
            <span
              className={[
                'absolute -left-9.5 top-1.5 size-3 rounded-full border-2',
                isCurrent
                  ? 'border-accent bg-accent shadow-[0_0_8px_#00f5ff]'
                  : 'border-white/20 bg-panel',
              ].join(' ')}
            />
            <p
              className={[
                'font-mono text-xs tracking-[0.12em]',
                isCurrent ? 'text-accent' : 'text-muted',
              ].join(' ')}
            >
              {period}
            </p>
            <h3 className="mt-2 text-base font-bold text-white sm:text-lg">{role}</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{description}</p>
            {tags && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-white/10 bg-ink/50 px-2.5 py-1 font-mono text-[11px] tracking-wide text-fg/80"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ProfessionalJourney;
