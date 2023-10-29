import React from 'react';
import {IconType} from 'react-icons';
import {twMerge} from 'tailwind-merge';

interface Props {
  Icon: React.ReactElement<IconType & {className: string}>;
  className?: string;
}

const Icon = ({Icon, className}: Props) => {
  return (
    <div>
      {React.cloneElement(Icon, {
        className: twMerge(
          'w-20 h-20 text-white mb-2 md:mb-0 hover:scale-125 transition-all',
          className
        ),
      })}
    </div>
  );
};

export default Icon;
