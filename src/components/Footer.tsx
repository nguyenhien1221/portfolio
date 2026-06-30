const footerLinks = [
  { label: 'GITHUB', href: 'https://github.com' },
  { label: 'LINKEDIN', href: 'https://linkedin.com' },
  { label: 'CONTACT', href: '/#contact' },
  { label: 'EMAIL', href: 'mailto:hello@devcore.dev' },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-sm font-extrabold tracking-[0.2em] text-white">
            DEV_CORE
          </p>
          <p className="mt-1 font-mono text-[11px] tracking-wide text-muted">
            © 2024 DEV_CORE // Engineered for Performance
          </p>
        </div>

        <nav className="flex flex-wrap gap-6">
          {footerLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="font-mono text-[11px] tracking-[0.15em] text-muted transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
