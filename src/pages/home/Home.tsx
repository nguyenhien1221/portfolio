import { useEffect } from 'react';
import SidebarLayout from '../../components/layout/SidebarLayout';
import MobileNav from '../../components/layout/MobileNav';
import SiteFooter from '../../components/SiteFooter';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';

const Home = () => {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) {
      return;
    }

    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, []);

  return (
    <>
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
      <MobileNav />
    </>
  );
};

export default Home;
