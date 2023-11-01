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
import {motion} from 'framer-motion';

const TechnologiesSection = () => (
  <SectionWrapper className="bg-secondary">
    <SectionHeading subheading="SKILLS" heading="TECHNOLOGIES" />
    <motion.div
      className="mt-5 grid grid-cols-2 items-center justify-center justify-items-center gap-y-4 md:grid-cols-6"
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      viewport={{once: true, amount: 0.7}}
      transition={{duration: 1}}
    >
      <Icon Icon={<SiJavascript />} />
      <Icon Icon={<SiTypescript />} />
      <Icon Icon={<SiNextdotjs />} />
      <Icon Icon={<SiReact />} />
      <Icon Icon={<SiTailwindcss />} />
      <Icon Icon={<SiGit />} />
    </motion.div>
  </SectionWrapper>
);

export default TechnologiesSection;
