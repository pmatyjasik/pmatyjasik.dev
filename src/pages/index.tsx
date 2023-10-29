import TechnologiesSection from 'components/Sections/TechnologiesSection/TechnologiesSection';
import AboutSection from 'components/Sections/AboutSection/AboutSection';
import ExperienceSection from 'components/Sections/ExperienceSection/ExperienceSection';
import ProjectsSection from 'components/Sections/ProjectsSection/ProjectsSection';
import ContactSection from 'components/Sections/ContactSection/ContactSection';

export default function Home() {
  return (
    <>
      <AboutSection />
      <TechnologiesSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
