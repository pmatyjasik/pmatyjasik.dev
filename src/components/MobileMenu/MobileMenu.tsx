import NavItems from 'components/NavItems/NavItems';
import useCloseComponent from 'hooks/useCloseComponent';
import React, {useRef} from 'react';
import {FaBars} from 'react-icons/fa';
import {twMerge} from 'tailwind-merge';

const MobileMenu = () => {
  const mobileMenu = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useCloseComponent(mobileMenu);
  return (
    <div className=" block md:hidden" ref={mobileMenu}>
      <FaBars
        className={twMerge(
          'z-50 h-6 w-6 cursor-pointer text-secondary hover:text-primary hover:transition-colors md:hidden',
          openMenu && 'text-primary'
        )}
        onClick={() => setOpenMenu(prev => !prev)}
      />
      {openMenu && (
        <div className="absolute left-0 top-16 z-10 flex h-32 w-full  flex-col items-center bg-white py-2 md:hidden">
          <NavItems className="flex h-full flex-col justify-evenly text-center" />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
