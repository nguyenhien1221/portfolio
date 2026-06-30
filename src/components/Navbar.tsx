import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'HOME', to: '/', end: true },
  { label: 'PROJECTS', to: '/projects', end: false },
  { label: 'SKILLS', to: '/skills', end: false },
  { label: 'CONTACT', to: '/contact', end: false },
];

const linkClassName =
  'text-xs font-medium tracking-[0.15em] text-muted transition-colors hover:text-accent';

const navLinkClass = (isActive: boolean, mobile = false) => {
  return [
    linkClassName,
    mobile ? 'block py-4 text-base tracking-[0.2em]' : 'pb-1',
    isActive ? (mobile ? 'text-accent' : 'border-b-2 border-accent text-accent') : '',
  ].join(' ');
}

const MenuIcon = ({ open }: { open: boolean }) => {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden className="text-white">
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="relative z-50 border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 lg:px-8">
        <NavLink
          to="/"
          end
          className="text-sm font-extrabold tracking-[0.2em] text-white"
          onClick={closeMenu}
        >
          DEV_CORE
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, to, end }) => (
            <NavLink
              key={label}
              to={to}
              end={end}
              className={({ isActive }) => navLinkClass(isActive)}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            className="hidden rounded bg-accent px-5 py-2.5 text-xs font-bold tracking-[0.12em] text-ink transition-opacity hover:opacity-90 sm:inline-block"
          >
            RESUME
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded border border-white/10 p-2 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            <MenuIcon open={isOpen} />
          </button>
        </div>
      </div>

      {isOpen && (
        <nav id="mobile-nav" className="fixed inset-0 z-50 flex flex-col bg-ink md:hidden">
          <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
            <span className="text-sm font-extrabold tracking-[0.2em] text-white">DEV_CORE</span>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded border border-white/10 p-2"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <MenuIcon open />
            </button>
          </div>

          <ul className="flex flex-1 flex-col items-center justify-start px-6">
            {navLinks.map(({ label, to, end }) => (
              <li key={label} className="w-full max-w-xs text-center">
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) => navLinkClass(isActive, true)}
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="mt-8">
              <a
                href="/resume.pdf"
                className="inline-block rounded bg-accent px-8 py-3.5 text-xs font-bold tracking-[0.12em] text-ink transition-opacity hover:opacity-90"
                onClick={closeMenu}
              >
                RESUME
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
