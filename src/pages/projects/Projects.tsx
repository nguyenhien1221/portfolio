import DeveloperStatsTerminal from './components/DeveloperStatsTerminal';
import ProjectCard from './components/ProjectCard';
import ProjectsHeader from './components/ProjectsHeader';
import { featuredProjects } from './data/projects';

const Projects = () => {
  const [topRow, bottomRow] = [
    featuredProjects.slice(0, 2),
    featuredProjects.slice(2, 4),
  ];

  return (
    <main className="mx-auto max-w-7xl space-y-10 px-6 py-16 lg:space-y-12 lg:px-8 lg:py-24">
      <ProjectsHeader />

      <section aria-label="Featured projects" className="grid gap-6 lg:grid-cols-3">
        {topRow.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>

      <DeveloperStatsTerminal />

      <section aria-label="More projects" className="grid gap-6 lg:grid-cols-3">
        {bottomRow.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
    </main>
  );
}

export default Projects;
