import SocialIcon from '../SocialIcon';
import { navLinks, siteConfig, socialLinks } from '../../data/site';
import useActiveSection from '../../hooks/useActiveSection';

const Sidebar = () => {
  const activeSection = useActiveSection(navLinks.map(({ id }) => id));
  const [firstName, ...restName] = siteConfig.name.split(' ');

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside className="py-12 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-72 lg:shrink-0 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <a
          href="#about"
          onClick={(event) => {
            event.preventDefault();
            handleNavClick('#about');
          }}
          className="inline-block"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
            {firstName}
            {restName.length > 0 && (
              <>
                <br />
                {restName.join(' ')}
              </>
            )}
          </h1>
        </a>

        <h2 className="mt-4 text-lg font-medium text-white">{siteConfig.title}</h2>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{siteConfig.tagline}</p>

        <nav className="mt-12 hidden lg:block" aria-label="In-page navigation">
          <ul className="space-y-4">
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
                      'group flex items-center gap-4 text-xs font-bold tracking-[0.2em] transition-colors',
                      isActive ? 'text-white' : 'text-muted hover:text-white',
                    ].join(' ')}
                  >
                    <span
                      className={[
                        'h-px transition-all',
                        isActive
                          ? 'w-16 bg-white'
                          : 'w-8 bg-muted group-hover:w-16 group-hover:bg-white',
                      ].join(' ')}
                      aria-hidden
                    />
                    {label.toUpperCase()}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="mt-12 flex items-center gap-5 lg:mt-0" aria-label="Social links">
        {socialLinks.map(({ label, href, icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-muted transition-colors hover:-translate-y-0.5 hover:text-accent"
              aria-label={label}
            >
              <SocialIcon name={icon} />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
