import MobileMenu from 'components/MobileMenu/MobileMenu';
import NavItems from 'components/NavItems/NavItems';
import React, {ReactNode} from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({children}: RootLayoutProps) => {
  return (
    <main>
      <nav className="sticky top-0 z-10 border-secondary bg-white bg-opacity-10 drop-shadow-lg backdrop-blur-lg backdrop-filter">
        <div className="px-2 md:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <span className="text-2xl font-semibold text-primary hover:cursor-pointer">
              Piotr Matyjasik
            </span>
            <NavItems className="hidden space-x-4 md:flex" />
            <MobileMenu />
          </div>
        </div>
      </nav>
      {children}
    </main>
  );
};

export default RootLayout;
