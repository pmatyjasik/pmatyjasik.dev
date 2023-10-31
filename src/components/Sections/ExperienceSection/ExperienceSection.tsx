import SectionHeading from 'components/SectionHeading/SectionHeading';
import Button from 'atoms/Button/Button';
import Link from 'next/link';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';
import ExperienceImage from 'components/ExperienceImage/ExperienceImage';

const ExperienceSection = () => (
  <SectionWrapper className="mt-8 md:mt-20">
    <SectionHeading subheading="JOBS" heading="EXPERIENCE" inverted />
    <div className="mt-2 grid h-auto w-auto grid-cols-2 grid-rows-2 items-center justify-items-center gap-5 md:grid-cols-4 md:grid-rows-1">
      <ExperienceImage src="/jobs/fujitsu.png" alt="Fujitsu" />
      <ExperienceImage src="/jobs/wp.png" alt="Wirtualna Polska" />
      <ExperienceImage src="/jobs/etechnologie.png" alt="eTechnologie" height={250} width={250} />
      <ExperienceImage src="/jobs/oirp.png" alt="OIRP" />
    </div>
    <div className="mt-8 flex justify-center ">
      <Link href="/cv/PiotrMatyjasikCV.pdf" download>
        <Button>Show CV</Button>
      </Link>
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
