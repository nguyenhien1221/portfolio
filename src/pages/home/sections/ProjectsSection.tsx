import SectionLabel from '../../../components/SectionLabel';
import { featuredProjects } from '../../../data/projects';
import ProjectPreview from '../../../components/ProjectPreview';
import useProjectAnimations from '../../../hooks/useProjectAnimations';

const ProjectsSection = () => {
  const { rootRef, handleProjectEnter, handleProjectLeave } = useProjectAnimations();

  return (
    <section
      id="projects"
      ref={rootRef}
      className="scroll-mt-24 pb-16 lg:pb-32"
    >
      <SectionLabel index="03" title="Projects" />

      <ul className="group/list space-y-12">
        {featuredProjects.map((project) => (
          <li
            key={project.title}
            className="project-card transition-opacity lg:group-hover/list:opacity-50 lg:hover:opacity-100!"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={handleProjectEnter}
              onMouseLeave={handleProjectLeave}
              className="grid gap-4 sm:grid-cols-8 sm:gap-6 sm:items-center"
            >
              <div className="project-thumb relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-panel sm:col-span-2 sm:aspect-square">
                <ProjectPreview variant={project.preview} />
              </div>

              <div className="sm:col-span-6">
                <h3 className="text-base font-medium text-white transition-colors group-hover:text-accent sm:text-lg">
                  {project.title}
                  <span className="project-arrow ml-1 inline-block text-accent" aria-hidden>
                    ↗
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="project-tag font-mono text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="mt-12 inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-accent transition-colors hover:text-white"
      >
        View Full Project Archive
        <span aria-hidden>→</span>
      </a>
    </section>
  );
};

export default ProjectsSection;
