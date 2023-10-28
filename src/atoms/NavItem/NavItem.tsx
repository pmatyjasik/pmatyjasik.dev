import React from 'react';

interface Props {
  text: string;
  url?: string;
}

const NavItem = ({text, url}: Props) => (
  <li className="border-b border-transparent text-white hover:scale-110 hover:cursor-pointer hover:border-b hover:border-white">
    <span>
      {text}
      {url}
    </span>
  </li>
);

export default NavItem;
