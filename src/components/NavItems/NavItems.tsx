import NavItem from 'atoms/NavItem/NavItem';
import React from 'react';
import {twMerge} from 'tailwind-merge';

interface Props {
  className?: string;
}

const NavItems = ({className}: Props) => (
  <ul className={twMerge('font-variant-small-caps', className)}>
    <NavItem text="about me" href="#about" />
    <NavItem text="technologies" href="#technologies" />
    <NavItem text="projects" href="#projects" />
    <NavItem text="contact" href="#contact" />
  </ul>
);

export default NavItems;
