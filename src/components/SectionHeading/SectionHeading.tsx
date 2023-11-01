import {motion} from 'framer-motion';
import React from 'react';
import {twMerge} from 'tailwind-merge';

interface SectionHeadingProps {
  subheading: string;
  heading: string;
  inverted?: boolean;
}

const SectionHeading = ({subheading, heading, inverted}: SectionHeadingProps) => (
  <motion.div
    initial={{opacity: 0.5, y: -100}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true, amount: 1}}
    transition={{duration: 1}}
  >
    <span
      className={twMerge(
        'block text-center text-sm font-semibold opacity-70',
        inverted ? 'text-black' : 'text-white'
      )}
    >
      {subheading}
    </span>
    <span
      className={twMerge(
        'block text-center text-3xl font-semibold',
        inverted ? 'text-secondary' : 'text-white'
      )}
    >
      {heading}
    </span>
  </motion.div>
);

export default SectionHeading;
