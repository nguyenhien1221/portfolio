import type { ReactNode } from 'react';

interface SoftSkill {
  title: string;
  description: string;
  icon: ReactNode;
}

const PeopleIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const BrainIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2a7 7 0 017 7c0 2.5-1.5 4.5-3 6v3H8v-3c-1.5-1.5-3-3.5-3-6a7 7 0 017-7zM9 21h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ChatIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const softSkills: SoftSkill[] = [
  {
    title: 'Collaborative Lead',
    description:
      'Bridging the gap between engineering, design, and product goals.',
    icon: <PeopleIcon />,
  },
  {
    title: 'Strategic Thinking',
    description:
      'Analyzing complex user requirements to build scalable solutions.',
    icon: <BrainIcon />,
  },
  {
    title: 'Clear Communication',
    description:
      'Articulating technical concepts to non-technical stakeholders.',
    icon: <ChatIcon />,
  },
];

const SoftSkillsSection = () => {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {softSkills.map(({ title, description, icon }) => (
        <article
          key={title}
          className="rounded-lg border border-white/10 bg-panel p-6 text-center transition-colors hover:border-accent/30"
        >
          <div className="mx-auto mb-4 flex size-12 items-center justify-center text-accent">
            {icon}
          </div>
          <h3 className="text-base font-bold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
        </article>
      ))}
    </section>
  );
}

export default SoftSkillsSection;
