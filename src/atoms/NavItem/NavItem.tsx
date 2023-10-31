import Link from 'next/link';
import React from 'react';
import {twMerge} from 'tailwind-merge';

interface NavItemProps {
  text: string;
  href: string;
}

const NavItem = ({text, href}: NavItemProps) => (
  <li
    className={twMerge(
      'border-b border-transparent text-white hover:scale-110 hover:cursor-pointer hover:border-white'
    )}
  >
    <Link href={href} scroll={false}>
      {text}
    </Link>
  </li>
);

export default NavItem;
