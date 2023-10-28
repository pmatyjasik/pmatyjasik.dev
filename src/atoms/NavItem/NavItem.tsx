import React from 'react';

interface Props {
  text: string;
  url?: string;
}

const NavItem = ({text, url}: Props) => (
  <li className="text-secondary hover:cursor-pointer hover:text-primary hover:transition-colors">
    <span>
      {text}
      {url}
    </span>
  </li>
);

export default NavItem;
