import React from 'react';
import {twMerge} from 'tailwind-merge';

interface SectionHeadingProps {
  subheading: string;
  heading: string;
  inverted?: boolean;
}

const SectionHeading = ({subheading, heading, inverted}: SectionHeadingProps) => (
  <div>
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
  </div>
);

export default SectionHeading;
