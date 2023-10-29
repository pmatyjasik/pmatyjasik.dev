import Icon from 'atoms/ReactIcon/ReactIcon';
import SectionHeading from 'components/SectionHeading/SectionHeading';
import Link from 'next/link';
import React from 'react';
import {SiGithub, SiLinkedin, SiMaildotru} from 'react-icons/si';

const ContactSection = () => {
  return (
    <section id="contact" className="full-width mt-5 bg-secondary px-2 py-10">
      <SectionHeading subheading="GET IN TOUCH" heading="CONTACT" />
      <div className="mt-4 flex items-center justify-evenly">
        <Link href="https://github.com/pmatyjasik" rel="noopener noreferrer" target="_blank">
          <Icon Icon={<SiGithub />} className="mb-4 md:mb-0" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/piotr-matyjasik/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon Icon={<SiLinkedin />} className="mb-4 rounded md:mb-0" />
        </Link>
        <Link href="mailto:pmatyjasik@icloud.com" rel="noopener noreferrer" target="_blank">
          <Icon Icon={<SiMaildotru />} className="mb-4 md:mb-0" />
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
