import Icon from 'atoms/Icon/Icon';
import SectionHeading from 'components/SectionHeading/SectionHeading';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';
import {motion} from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import {SiGithub, SiLinkedin, SiMaildotru} from 'react-icons/si';

const ContactSection = () => (
  <SectionWrapper className="mt-8 bg-secondary md:mt-20">
    <SectionHeading subheading="GET IN TOUCH" heading="CONTACT" />
    <motion.div
      className="mt-4 flex items-center justify-evenly"
      initial={{opacity: 0.1}}
      whileInView={{opacity: 1}}
      viewport={{once: true, amount: 0.7}}
      transition={{duration: 1}}
    >
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
    </motion.div>
  </SectionWrapper>
);

export default ContactSection;
