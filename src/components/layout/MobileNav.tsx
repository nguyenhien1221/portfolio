import useActiveSection from '../../context/ActiveSectionContext';
import { navLinks } from '../../data/site';

const MobileNav = () => {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur-sm lg:hidden">
      <div className="flex items-center justify-center gap-4 px-4 py-3">
        {/* <button
          type="button"
          onClick={() => scrollToSection('about')}
          className="truncate text-sm font-bold tracking-tight text-white"
        >
          {siteConfig.name.split(' ')[0]}
        </button> */}

        <nav aria-label="Mobile navigation">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ id, label, href }) => {
              const isActive = activeSection === id;

              return (
                <li key={id}>
                  <a
                    href={href}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(id);
                    }}
                    className={[
                      'block rounded px-2 py-1 font-mono text-[9px] font-bold tracking-[0.12em] transition-colors sm:text-[10px]',
                      isActive ? 'text-accent' : 'text-muted hover:text-white',
                    ].join(' ')}
                  >
                    {label.toUpperCase()}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MobileNav;
