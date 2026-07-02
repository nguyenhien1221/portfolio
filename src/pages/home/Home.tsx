import { useEffect } from 'react';
import SidebarLayout from '../../components/layout/SidebarLayout';
import MobileNav from '../../components/layout/MobileNav';
import SiteFooter from '../../components/SiteFooter';
import useActiveSection, { ActiveSectionProvider } from '../../context/ActiveSectionContext';
import { navLinks } from '../../data/site';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';

const sectionIds = navLinks.map(({ id }) => id);

const HashScrollHandler = () => {
  const { scrollToSection } = useActiveSection();

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) {
      return;
    }

    requestAnimationFrame(() => {
      scrollToSection(hash);
    });
  }, [scrollToSection]);

  return null;
};

const Home = () => {
  return (
    <ActiveSectionProvider sectionIds={sectionIds}>
      <HashScrollHandler />
      <MobileNav />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <SidebarLayout>
        <main>
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
          <SiteFooter />
        </main>
      </SidebarLayout>
    </ActiveSectionProvider>
  );
};

export default Home;
