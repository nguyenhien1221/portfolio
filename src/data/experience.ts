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
    period: 'Oct 2023 — Jun 2026',
    title: 'Frontend Developer',
    company: 'Icetea Software',
    description:
      'Developed and maintained frontend features for Web3 applications. Integrated blockchain wallets and smart contract interactions, worked closely with the backend team to consume APIs and handle edge cases, and improved UI performance and user experience.',
    tags: ['Web3', 'React', 'TypeScript', 'Wagmi'],
  },
  {
    period: 'Oct 2022 — Sep 2023',
    title: 'Frontend Web Developer',
    company: 'Monstarlab Viet Nam',
    description:
      'Built and maintained UI features using React and Ant Design. Integrated REST APIs and handled data fetching with React Query, fixed UI and logic bugs to improve application stability, and collaborated with team members through Git workflow.',
    tags: ['React', 'Ant Design', 'React Query', 'HTML5'],
  },
  {
    period: 'May 2022 — Jul 2022',
    title: 'Frontend Developer Intern',
    company: 'Appota',
    description:
      'Supported UI development for e-commerce features. Worked with Next.js, TypeScript, and Ant Design, fixed UI issues, and assisted in feature implementation.',
    tags: ['Next.js', 'TypeScript', 'Ant Design', 'HTML5', 'CSS'],
  },
];
