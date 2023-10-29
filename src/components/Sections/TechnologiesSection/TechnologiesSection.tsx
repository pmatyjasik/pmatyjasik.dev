import Icon from 'atoms/ReactIcon/ReactIcon';
import SectionHeading from 'components/SectionHeading/SectionHeading';
import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiGit,
  SiNextdotjs,
} from 'react-icons/si';

const TechnologiesSection = () => (
  <section id="technologies" className="full-width mt-5 bg-secondary px-2 py-10">
    <SectionHeading subheading="SKILLS" heading="TECHNOLOGIES" />
    <div className="mt-5 grid grid-cols-2 items-center justify-center justify-items-center gap-y-4 md:grid-cols-6">
      <Icon Icon={<SiJavascript />} />
      <Icon Icon={<SiTypescript />} />
      <Icon Icon={<SiNextdotjs />} />
      <Icon Icon={<SiReact />} />
      <Icon Icon={<SiTailwindcss />} />
      <Icon Icon={<SiGit />} />
    </div>
  </section>
);

export default TechnologiesSection;
