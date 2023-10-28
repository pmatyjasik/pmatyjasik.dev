import NavItem from 'atoms/NavItem/NavItem';
import React from 'react';
import {twMerge} from 'tailwind-merge';

interface Props {
  className?: string;
}

const NavItems = ({className}: Props) => (
  <ul className={twMerge('font-variant-small-caps', className)}>
    <NavItem text="about me" />
    <NavItem text="technologies" />
    <NavItem text="projects" />
    <NavItem text="contact" />
  </ul>
);

export default NavItems;
