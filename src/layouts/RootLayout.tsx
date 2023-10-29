import MobileMenu from 'components/MobileMenu/MobileMenu';
import NavItems from 'components/NavItems/NavItems';
import React, {ReactNode} from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({children}: RootLayoutProps) => {
  return (
    <main>
      <nav className="sticky top-0 z-10 border-b border-white bg-primary">
        <div className="px-2 md:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <span className="text-2xl font-semibold text-white hover:cursor-pointer">
              Piotr Matyjasik
            </span>
            <NavItems className="hidden gap-4 space-x-4 md:flex" />
            <MobileMenu />
          </div>
        </div>
      </nav>
      {children}
    </main>
  );
};

export default RootLayout;
