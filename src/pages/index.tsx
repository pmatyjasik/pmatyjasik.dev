import Lottie from 'lottie-react';
import coderAnimation from 'assets/animation.json';
import {FaArrowAltCircleDown} from 'react-icons/fa';
import SectionHeading from 'components/SectionHeading/SectionHeading';
import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiGit,
  SiNextdotjs,
} from 'react-icons/si';
import Icon from 'atoms/ReactIcon/ReactIcon';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section id="about">
        <div className=" mt-6 flex items-center justify-center px-4 md:px-8 lg:h-[75vh] lg:px-10">
          <div className="lg:w-1/2">
            <h3 className="mb-2 text-xl text-secondary">Piotr Matyjasik 🇵🇱</h3>
            <i>Bachelor of Computer Science</i>
            <span className="mt-1 block text-4xl font-semibold text-heading sm:text-4xl">
              Front-end Developer
            </span>
            <p className="mt-5 leading-relaxed text-content sm:leading-loose lg:w-4/5">
              For the past 4 years, I have been passionate about web application development with a
              focus on the frontend. With over 2.5 years of professional experience, I have
              dedicated myself to furthering my knowledge in this ever-evolving field.
              <br />I graduated from the West Pomeranian University of Technology with a
              bachelor&#39;s degree in computer science. Currently, I am studying management at the
              University of Szczecin on the weekends in pursuit of a master&#39;s degree.
            </p>
          </div>
          <Lottie
            animationData={coderAnimation}
            loop
            className="hidden lg:block lg:h-[25rem] xl:h-[30rem]"
          />
        </div>
        <div className="mt-10 flex w-full justify-center">
          <Link href="#technologies" scroll={false}>
            <FaArrowAltCircleDown className="h-8 w-8 animate-pulse text-center text-primary hover:animate-none hover:cursor-pointer" />
          </Link>
        </div>
      </section>
      <section id="technologies" className="full-width mt-10 bg-secondary px-2 py-10">
        <SectionHeading subheading="SKILLS" heading="TECHNOLOGIES" />
        <div className="mt-5 grid grid-cols-2 items-center justify-center justify-items-center gap-y-4 md:grid-cols-6">
          <Icon Icon={<SiJavascript />} />
          <Icon Icon={<SiTypescript />} />
          <Icon Icon={<SiNextdotjs />} />
          <Icon Icon={<SiReact />} />
          <Icon Icon={<SiTailwindcss />} />
          <Icon Icon={<SiGit />} />
        </div>
      </section>
    </>
  );
}
