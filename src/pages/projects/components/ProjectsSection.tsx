interface Project {
  title: string;
  description: string;
  year: string;
  variant: 'dashboard' | 'isometric';
}

const projects: Project[] = [
  {
    title: 'Quantum Finance Platform',
    description: 'Real-time data visualization for high-frequency trading',
    year: '2024',
    variant: 'dashboard',
  },
  {
    title: 'Aether Commerce',
    description: '3D immersive shopping experience using WebGL',
    year: '2024',
    variant: 'isometric',
  },
];

const DashboardPreview = () => {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-panel-header to-ink">
      <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,245,255,0.15),transparent_60%)]" />
      <div className="absolute inset-4 rounded border border-white/10 bg-ink/40 p-3">
        <div className="mb-3 flex gap-1.5">
          <span className="h-1.5 flex-1 rounded-full bg-accent/30" />
          <span className="h-1.5 w-8 rounded-full bg-white/10" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="aspect-square rounded bg-accent/5 border border-white/5"
            />
          ))}
        </div>
        <div className="mt-2 flex h-16 items-end gap-1">
          {[35, 55, 40, 70, 50, 85, 60].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-accent/40"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const IsometricPreview = () => {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-panel-header to-ink">
      <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,rgba(0,245,255,0.2),transparent_55%)]" />
      <div className="absolute left-1/2 top-1/2 h-24 w-32 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-lg border border-accent/30 bg-panel shadow-[0_0_30px_rgba(0,245,255,0.15)]">
        <div className="h-full w-full rounded-lg bg-gradient-to-br from-accent/20 to-transparent" />
      </div>
      <div className="absolute bottom-6 left-8 h-3 w-20 rotate-12 rounded bg-accent/20" />
      <div className="absolute right-10 top-8 h-2 w-14 -rotate-6 rounded bg-white/10" />
    </div>
  );
}

const ProjectCard = ({ title, description, year, variant }: Project) => {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-panel transition-colors hover:border-accent/30">
      <div className="overflow-hidden">
        {variant === 'dashboard' ? <DashboardPreview /> : <IsometricPreview />}
      </div>
      <div className="relative p-5">
        <span className="absolute right-5 top-5 font-mono text-xs text-accent">
          {year}
        </span>
        <h3 className="pr-12 text-lg font-bold text-white group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted">{description}</p>
      </div>
    </article>
  );
}

const ProjectsSection = () => {
  return (
    <section id="projects" className="border-t border-white/5 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              High-Impact Projects
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-accent" />
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 font-mono text-xs tracking-[0.12em] text-muted transition-colors hover:text-accent"
          >
            View All Archives
            <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
