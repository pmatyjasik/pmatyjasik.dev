import Icon from 'atoms/Icon/Icon';
import Head from 'next/head';
import Link from 'next/link';
import React, {ReactNode} from 'react';
import {SiGithub, SiLinkedin, SiMaildotru, SiReaddotcv} from 'react-icons/si';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({children}: RootLayoutProps) => (
  <>
    <Head>
      <title>Piotr Matyjasik</title>
    </Head>
    <main>
      <nav className="sticky top-0 z-10 border-b border-white bg-primary">
        <div className="px-2 md:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <span className="text-2xl font-semibold text-white hover:cursor-pointer">
              Piotr Matyjasik
            </span>
            <div className="flex items-center justify-between gap-3 md:gap-7">
              <Link href="https://github.com/pmatyjasik" rel="noopener noreferrer" target="_blank">
                <Icon Icon={<SiGithub />} navMenu />
              </Link>
              <Link
                href="https://www.linkedin.com/in/piotr-matyjasik/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon Icon={<SiLinkedin />} navMenu />
              </Link>
              <Link href="mailto:pmatyjasik@icloud.com" rel="noopener noreferrer" target="_blank">
                <Icon Icon={<SiMaildotru />} navMenu />
              </Link>
              <Link href="/cv/PiotrMatyjasikCV.pdf" download>
                <Icon Icon={<SiReaddotcv />} navMenu />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {children}
      <footer className="w-full bg-primary py-2">
        <p className="text-center font-light text-white">
          &copy; {new Date().getFullYear()} - Piotr Matyjasik
        </p>
      </footer>
    </main>
  </>
);

export default RootLayout;
