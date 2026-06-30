import type { ProjectCardData } from '../components/ProjectCard';

export const featuredProjects: ProjectCardData[] = [
  {
    title: 'CloudCore Infrastructure Manager',
    description:
      'A comprehensive monitoring solution for multi-cloud environments, featuring real-time telemetry, automated scaling triggers, and visual VPC designer.',
    tags: ['React JS', 'Next.js', 'Node.js'],
    preview: 'dashboard',
    layout: 'horizontal',
    imagePosition: 'left',
    span: 2,
    actions: [
      { label: 'VIEW PROJECT', href: '#', variant: 'primary', icon: 'eye' },
      { label: 'SOURCE', href: '#', variant: 'secondary', icon: 'code' },
    ],
  },
  {
    title: 'NeoBank Wallet UI',
    description:
      'Mobile-first financial dashboard with custom charts, transaction categorization, and dynamic theme switching based on asset performance.',
    tags: ['React Native', 'Tailwind', 'D3.js'],
    preview: 'mobile',
    layout: 'vertical',
    span: 1,
    actions: [
      {
        label: 'LIVE PREVIEW',
        href: '#',
        variant: 'primary',
        icon: 'external',
        fullWidth: true,
      },
    ],
  },
  {
    title: 'Titan Gear Store',
    description:
      'High-conversion storefront for professional peripherals, integrated with headless CMS for seamless content updates.',
    tags: ['HTML', 'CSS'],
    preview: 'storefront',
    layout: 'vertical',
    span: 1,
    actions: [
      { label: 'DEMO', href: '#', variant: 'primary', icon: 'eye' },
      { label: 'CODE', href: '#', variant: 'secondary', icon: 'code' },
    ],
  },
  {
    title: 'Sentitron NLP Engine',
    description:
      'Real-time sentiment analysis engine for social media streams, processing 10k+ nodes per second.',
    tags: ['Node.js', 'Redis'],
    preview: 'wave',
    layout: 'horizontal',
    imagePosition: 'right',
    span: 2,
    actions: [{ label: 'DOCS', href: '#', variant: 'primary', icon: 'docs' }],
  },
];
