import Icon from 'atoms/Icon/Icon';
import SectionHeading from 'components/SectionHeading/SectionHeading';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';
import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiGit,
  SiNextdotjs,
} from 'react-icons/si';

const TechnologiesSection = () => (
  <SectionWrapper className="bg-secondary">
    <SectionHeading subheading="SKILLS" heading="TECHNOLOGIES" />
    <div className="mt-5 grid grid-cols-2 items-center justify-center justify-items-center gap-y-4 md:grid-cols-6">
      <Icon Icon={<SiJavascript />} />
      <Icon Icon={<SiTypescript />} />
      <Icon Icon={<SiNextdotjs />} />
      <Icon Icon={<SiReact />} />
      <Icon Icon={<SiTailwindcss />} />
      <Icon Icon={<SiGit />} />
    </div>
  </SectionWrapper>
);

export default TechnologiesSection;
