import SectionHeading from 'components/SectionHeading/SectionHeading';
import Button from 'atoms/Button/Button';
import Link from 'next/link';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';
import ExperienceImage from 'components/ExperienceImage/ExperienceImage';
import {motion} from 'framer-motion';

const ExperienceSection = () => (
  <SectionWrapper className="mt-8 md:mt-20">
    <SectionHeading subheading="JOBS" heading="EXPERIENCE" inverted />
    <motion.div
      initial={{opacity: 0.5, scale: 0.5, y: 100}}
      whileInView={{opacity: 1, scale: 1, y: 0}}
      viewport={{once: true, amount: 0.7}}
      transition={{duration: 0.5}}
      className="mt-2 grid h-auto w-auto grid-cols-2 grid-rows-2 items-center justify-items-center gap-5 md:grid-cols-4 md:grid-rows-1"
    >
      <ExperienceImage src="/jobs/fujitsu.png" alt="Fujitsu" />
      <ExperienceImage src="/jobs/wp.png" alt="Wirtualna Polska" />
      <ExperienceImage src="/jobs/etechnologie.png" alt="eTechnologie" height={250} width={250} />
      <ExperienceImage src="/jobs/oirp.png" alt="OIRP" />
    </motion.div>
    <motion.div
      className="mt-8 flex justify-center"
      initial={{opacity: 0.3}}
      whileInView={{opacity: 1}}
      viewport={{once: true, amount: 0.7}}
      transition={{duration: 0.5}}
    >
      <Link href="/cv/PiotrMatyjasikCV.pdf" download>
        <Button>Show CV</Button>
      </Link>
    </motion.div>
  </SectionWrapper>
);

export default ExperienceSection;
