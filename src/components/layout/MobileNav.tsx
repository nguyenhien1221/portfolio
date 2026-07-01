import { navLinks } from '../../data/site';
import useActiveSection from '../../hooks/useActiveSection';

const MobileNav = () => {
  const activeSection = useActiveSection(navLinks.map(({ id }) => id));

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/95 backdrop-blur-sm lg:hidden"
      aria-label="Mobile navigation"
    >
      <ul className="flex justify-around px-2 py-3">
        {navLinks.map(({ id, label, href }) => {
          const isActive = activeSection === id;

          return (
            <li key={id}>
              <a
                href={href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(href);
                }}
                className={[
                  'block px-3 py-1 font-mono text-[10px] font-bold tracking-[0.15em] transition-colors',
                  isActive ? 'text-accent' : 'text-muted',
                ].join(' ')}
              >
                {label.toUpperCase()}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNav;
