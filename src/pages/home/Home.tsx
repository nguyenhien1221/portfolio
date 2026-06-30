import CtaSection from '../contact/components/CtaSection';
import ProjectsSection from '../projects/components/ProjectsSection';
import TechnicalArsenal from '../skills/components/TechnicalArsenal';
import Terminal from './components/Terminal';

const Home = () => {
  return (
    <>
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <section className="text-left">
            <div className="mb-8 inline-flex items-center gap-2 rounded border border-accent/40 bg-accent/5 px-3 py-1.5">
              <span className="size-2 rounded-full bg-accent shadow-[0_0_8px_#00f5ff]" />
              <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-accent">
                AVAILABLE FOR HIRE
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Building Digital Experiences with{' '}
              <span className="text-accent">Precision.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              A Senior Frontend Engineer dedicated to sculpting high-performance
              interfaces where technical rigor meets sophisticated design.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded bg-accent px-7 py-3.5 text-xs font-bold tracking-[0.12em] text-ink transition-opacity hover:opacity-90"
              >
                VIEW WORK
              </a>
              <a
                href="#contact"
                className="rounded border border-accent/60 px-7 py-3.5 text-xs font-bold tracking-[0.12em] text-accent transition-colors hover:border-accent hover:bg-accent/5"
              >
                CONTACT ME
              </a>
            </div>
          </section>

          <section aria-label="About me terminal">
            <Terminal />
          </section>
        </div>
      </main>

      <TechnicalArsenal />
      <ProjectsSection />
      <CtaSection />
    </>
  );
}

export default Home;
