export interface ExperienceEntry {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    period: '2022 — Present',
    title: 'Senior Frontend Engineer',
    company: 'CloudNexus',
    description:
      'Leading frontend architecture for a multi-tenant SaaS platform. Built design systems, optimized Core Web Vitals, and integrated Web3 wallet flows across React and Next.js applications.',
    tags: ['Next.js', 'NestJS', 'Web3', 'Tailwind'],
  },
  {
    period: '2020 — 2022',
    title: 'UI/UX Developer',
    company: 'PixelForge Studio',
    description:
      'Translated Figma designs into responsive, accessible interfaces. Collaborated with designers to establish component libraries and motion guidelines for client deliverables.',
    tags: ['React', 'Figma', 'Storybook', 'GSAP'],
  },
  {
    period: '2018 — 2020',
    title: 'Frontend Developer',
    company: 'DevLaunch',
    description:
      'Shipped production features for e-commerce and dashboard products. Gained foundational experience in REST APIs, state management, and agile delivery workflows.',
    tags: ['JavaScript', 'Redux', 'REST', 'Jest'],
  },
  {
    period: '2014 — 2018',
    title: 'B.Sc. Computer Science',
    company: 'Tech University',
    description:
      'Focused on software engineering, algorithms, and human-computer interaction. Graduated with honors and completed a capstone project on real-time web applications.',
    tags: [],
  },
];
