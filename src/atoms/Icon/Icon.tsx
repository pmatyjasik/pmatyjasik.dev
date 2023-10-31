import React from 'react';
import {IconType} from 'react-icons';
import {twMerge} from 'tailwind-merge';

interface IconProps {
  Icon: React.ReactElement<IconType & {className: string}>;
  className?: string;
  navMenu?: boolean;
}

const Icon = ({Icon, className, navMenu}: IconProps) => (
  <div>
    {React.cloneElement(Icon, {
      className: twMerge(
        'w-20 h-20 text-white hover:scale-125 transition-all',
        navMenu && 'h-6 w-6',
        className
      ),
    })}
  </div>
);

export default Icon;
