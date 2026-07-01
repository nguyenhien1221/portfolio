import SectionLabel from '../../../components/SectionLabel';

const technologies = [
  'Web3',
  'Wagmi',
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'NestJS',
  'Ethers.js',
  'PostgreSQL',
];

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 pb-16 lg:pb-32">
      <SectionLabel index="01" title="About" />

      <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
        <p>
          I&apos;m a frontend engineer with an expertise in building accessible, pixel-perfect user
          interfaces. I take pride in crafting thoughtful, inclusive products and have a sharp eye
          for the little details that elevate user experience. I do my best work at the intersection
          of design and engineering, where great UX meets clean, scalable code.
        </p>
        <p>
          Currently, I focus on high-performance React and Next.js applications, design systems, and
          Web3 integrations. I partner closely with designers and backend engineers to ensure
          accessibility and performance are built into the foundation of every product I ship.
        </p>
        <p>
          Previously, I&apos;ve worked across product studios and startups — building e-commerce
          platforms, SaaS dashboards, and immersive web experiences. These environments shaped how I
          think about building products that are both well-crafted and widely usable.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 font-mono text-xs tracking-[0.15em] text-accent">
          TECHNOLOGIES I WORK WITH
        </h3>
        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-xs text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
