import React from 'react';
import {SiGithub} from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';
import Button from 'atoms/Button/Button';

interface ProjectItemProps {
  src: string;
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  githubLink: string;
}

const ProjectItem = ({
  src,
  projectTitle,
  projectDescription,
  projectLink,
  githubLink,
}: ProjectItemProps) => (
  <div className="mt-7 flex flex-row justify-center">
    <Image
      className="hidden rounded-xl shadow-lg md:block"
      src={src}
      alt={projectTitle}
      width={500}
      height={300}
    />
    <div className="ml-8 flex w-full flex-col justify-center md:w-auto">
      <span className="mb-2 text-3xl font-semibold text-secondary">{projectTitle}</span>
      <p className="w- mb-2 w-auto text-sm text-secondary md:max-w-[400px]">{projectDescription}</p>
      <div className="flex flex-row items-end">
        <Link
          className="cursor-not-allowed"
          href={projectLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button>Go to page</Button>
        </Link>
        <Link href={githubLink} rel="noopener noreferrer" target="_blank">
          <SiGithub className="ml-2 h-10 w-10 transition-all hover:-translate-y-1 " />
        </Link>
      </div>
    </div>
  </div>
);

export default ProjectItem;
