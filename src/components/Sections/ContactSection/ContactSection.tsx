import Icon from 'atoms/Icon/Icon';
import SectionHeading from 'components/SectionHeading/SectionHeading';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';
import Link from 'next/link';
import React from 'react';
import {SiGithub, SiLinkedin, SiMaildotru} from 'react-icons/si';

const ContactSection = () => (
  <SectionWrapper className="mt-8 bg-secondary md:mt-20">
    <SectionHeading subheading="GET IN TOUCH" heading="CONTACT" />
    <div className="mt-4 flex items-center justify-evenly">
      <Link href="https://github.com/pmatyjasik" rel="noopener noreferrer" target="_blank">
        <Icon Icon={<SiGithub />} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/piotr-matyjasik/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon Icon={<SiLinkedin />} />
      </Link>
      <Link href="mailto:pmatyjasik@icloud.com" rel="noopener noreferrer" target="_blank">
        <Icon Icon={<SiMaildotru />} />
      </Link>
    </div>
  </SectionWrapper>
);

export default ContactSection;
