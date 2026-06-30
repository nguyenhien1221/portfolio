import type { ReactNode } from 'react';
import SectionHeading from './SectionHeading';

interface ArsenalCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tags?: string[];
  footer?: { left: string; right: string };
  className?: string;
}

const ArsenalCard = ({
  icon,
  title,
  description,
  tags,
  footer,
  className = '',
}: ArsenalCardProps) => {
  return (
    <article
      className={[
        'flex flex-col rounded-lg border border-white/10 bg-panel p-6 transition-colors hover:border-accent/30',
        className,
      ].join(' ')}
    >
      <div className="mb-4 text-accent">{icon}</div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>
      {tags && (
        <ul className="mt-5 flex flex-wrap gap-2">
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
      {footer && (
        <div className="mt-5 flex items-center justify-between font-mono text-xs">
          <span className="text-muted">{footer.left}</span>
          <span className="font-medium text-accent">{footer.right}</span>
        </div>
      )}
    </article>
  );
}

const ArchitectureIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3L2 9l10 6 10-6-10-6zM2 15l10 6 10-6M2 12l10 6 10-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CloudIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SparkIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const TechnicalArsenal = () => {
  return (
    <section id="skills" className="border-t border-white/5 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Technical Arsenal" />

        <div className="grid gap-4 lg:grid-cols-12">
          <ArsenalCard
            className="lg:col-span-7"
            icon={<ArchitectureIcon />}
            title="Architecture & Scale"
            description="Building maintainable design systems and micro-frontend architectures that support enterprise-level growth without technical debt."
            tags={['React', 'Next.js', 'Node.js', 'REST']}
          />
          <ArsenalCard
            className="lg:col-span-5"
            icon={<CloudIcon />}
            title="Core Web Vitals"
            description="Obsessive optimization for LCP, FID, and CLS. I treat performance as a primary feature, not an afterthought."
            footer={{ left: 'Lighthouse', right: '100/100' }}
          />
          <ArsenalCard
            className="lg:col-span-5"
            icon={<SparkIcon />}
            title="Creative Engineering"
            description="Bridging the gap between motion design and web technologies using Three.js and complex CSS animations."
            tags={['GSAP', 'Three.js', 'WebGL']}
          />
          <ArsenalCard
            className="lg:col-span-7"
            icon={<ArchitectureIcon />}
            title="Accessibility-First"
            description="Ensuring the digital world remains open to everyone. Expert-level implementation of WCAG 2.1 standards and ARIA patterns."
          />
        </div>
      </div>
    </section>
  );
}

export default TechnicalArsenal;
