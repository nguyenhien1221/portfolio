import { useState } from 'react';
import SectionLabel from '../../../components/SectionLabel';
import { experience } from '../../../data/experience';
import { siteConfig } from '../../../data/site';
import useExperienceAnimations from '../../../hooks/useExperienceAnimations';

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEntry = experience[activeIndex];
  const { panelRef, handleTabClick } = useExperienceAnimations(activeIndex, setActiveIndex);

  return (
    <section id="experience" className="scroll-mt-24 pb-16 lg:pb-32 min-h-[540px]">
      <SectionLabel index="02" title="Experience" />

      <div className="hidden lg:flex lg:gap-8 min-h-[300px]">
        <div
          role="tablist"
          aria-label="Work experience"
          className="mb-8 flex flex-col lg:mb-0 lg:w-[30%] lg:shrink-0"
        >
          {experience.map((entry, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={`${entry.company}-${entry.period}`}
                type="button"
                role="tab"
                id={`experience-tab-${index}`}
                aria-selected={isActive}
                aria-controls={`experience-panel-${index}`}
                onClick={(event) => handleTabClick(index, event.currentTarget)}
                className={[
                  'group relative w-full border-l-2 py-3 pl-5 text-left transition-colors',
                  isActive
                    ? 'border-accent bg-panel/50'
                    : 'border-white/10 hover:border-muted hover:bg-panel/30',
                ].join(' ')}
              >
                <span
                  className={[
                    'block font-mono text-xs tracking-wide',
                    isActive ? 'text-accent' : 'text-muted group-hover:text-fg',
                  ].join(' ')}
                >
                  {entry.period}
                </span>
                <span
                  className={[
                    'mt-1 block text-sm font-medium',
                    isActive ? 'text-white' : 'text-muted group-hover:text-white',
                  ].join(' ')}
                >
                  {entry.title}
                  <span className="hidden sm:inline"> · {entry.company}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`experience-panel-${activeIndex}`}
          aria-labelledby={`experience-tab-${activeIndex}`}
          className="lg:w-[70%]"
        >
          <div
            ref={panelRef}
            className="experience-panel rounded-lg border border-white/10 bg-panel/40 p-6 lg:p-8"
          >
            <h3 className="experience-panel-title text-lg font-medium text-white">
              {activeEntry.title} <span className="text-muted">· {activeEntry.company}</span>
            </h3>
            <p className="experience-panel-desc mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {activeEntry.description}
            </p>
            {activeEntry.tags.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                {activeEntry.tags.map((tag) => (
                  <li
                    key={tag}
                    className="experience-tag rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-xs text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 lg:hidden">
        {experience.map((entry, index) => (
          <article key={`${entry.company}-mobile`} className="mb-10 last:mb-0">
            <p className="font-mono text-xs text-accent">{entry.period}</p>
            <h3 className="mt-2 text-base font-medium text-white">
              {entry.title} · {entry.company}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{entry.description}</p>
            {entry.tags.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-xs text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            {index < experience.length - 1 && <hr className="mt-10 border-white/10" />}
          </article>
        ))}
      </div>

      <a
        href={siteConfig.resumeUrl}
        className="mt-12 inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-accent transition-colors hover:text-white"
      >
        View Full Résumé
        <span aria-hidden>→</span>
      </a>
    </section>
  );
};

export default ExperienceSection;
