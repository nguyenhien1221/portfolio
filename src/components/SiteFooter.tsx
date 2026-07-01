import { siteConfig } from '../data/site';

const SiteFooter = () => {
  return (
    <footer className="mt-16 border-t border-white/5 pt-8 pb-24 lg:pb-8">
      <p className="max-w-md text-xs leading-relaxed text-muted">
        Loosely designed and coded in Visual Studio Code. Built with React and
        Tailwind CSS. All text is set in the Inter typeface.
      </p>
      <p className="mt-4 font-mono text-[11px] text-muted/70">
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
    </footer>
  );
};

export default SiteFooter;
