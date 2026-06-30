const ProjectsHeader = () => {
  return (
    <header className="max-w-3xl">
      <div className="mb-6 inline-flex items-center gap-2">
        <span className="size-2 rounded-full bg-accent shadow-[0_0_8px_#00f5ff]" />
        <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-accent">
          PORTFOLIO 2024
        </span>
      </div>

      <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
        <span className="text-white">ENGINEERING</span>
        <br />
        <span className="text-accent">EXCELLENCE</span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        A curated showcase of technical implementations, focusing on performance,
        scalability, and meticulous UI architecture. Explore the intersection of
        design and robust logic.
      </p>
    </header>
  );
}

export default ProjectsHeader;
