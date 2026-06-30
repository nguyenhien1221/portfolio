import FrontendArchitecture from './components/FrontendArchitecture';
import ProfessionalJourney from './components/ProfessionalJourney';
import SkillsCta from './components/SkillsCta';
import SkillsHeader from './components/SkillsHeader';
import SoftSkillsSection from './components/SoftSkillsSection';
import StackAuditTerminal from './components/StackAuditTerminal';

const Skills = () => {
  return (
    <main className="mx-auto max-w-7xl space-y-16 px-6 py-16 lg:space-y-20 lg:px-8 lg:py-24">
      <SkillsHeader />

      <section className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <FrontendArchitecture />
        <StackAuditTerminal />
      </section>

      <SoftSkillsSection />
      <ProfessionalJourney />
      <SkillsCta />
    </main>
  );
}

export default Skills;
