const SkillsCta = () => {
  return (
    <section className="rounded-lg border border-white/10 bg-gradient-to-r from-panel to-panel-header p-8 sm:p-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl text-left">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Ready to build something exceptional?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            I am currently available for freelance and full-time opportunities.
            Let&apos;s connect and discuss your next project.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded bg-accent px-8 py-3.5 text-xs font-bold tracking-[0.12em] text-ink transition-opacity hover:opacity-90"
        >
          Hire Me
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}

export default SkillsCta;
