export interface ProjectEntry {
  title: string;
  description: string;
  href: string;
  tags: string[];
  preview: 'dashboard' | 'mobile' | 'storefront' | 'wave';
}

export const featuredProjects: ProjectEntry[] = [
  {
    title: 'CloudCore Infrastructure Manager',
    description:
      'A comprehensive monitoring solution for multi-cloud environments, featuring real-time telemetry, automated scaling triggers, and visual VPC designer.',
    href: '#',
    tags: ['React', 'Next.js', 'Node.js'],
    preview: 'dashboard',
  },
  {
    title: 'NeoBank Wallet UI',
    description:
      'Mobile-first financial dashboard with custom charts, transaction categorization, and dynamic theme switching based on asset performance.',
    href: '#',
    tags: ['React Native', 'Tailwind', 'D3.js'],
    preview: 'mobile',
  },
  {
    title: 'Titan Gear Store',
    description:
      'High-conversion storefront for professional peripherals, integrated with headless CMS for seamless content updates.',
    href: '#',
    tags: ['HTML', 'CSS'],
    preview: 'storefront',
  },
  {
    title: 'Sentitron NLP Engine',
    description:
      'Real-time sentiment analysis engine for social media streams, processing 10k+ nodes per second.',
    href: '#',
    tags: ['Node.js', 'Redis'],
    preview: 'wave',
  },
];
