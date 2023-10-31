import Lottie from 'lottie-react';
import animation from 'assets/animation.json';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';

const AboutSection = () => (
  <SectionWrapper className="flex md:h-[93.5vh]">
    <div className="lg:h-3/4">
      <div className="grid items-center justify-center px-4 md:px-8 lg:grid-cols-2 lg:gap-10 lg:px-10 xl:grid-cols-[40%_40%]">
        <div>
          <h3 className="mb-2 text-2xl text-secondary">Piotr Matyjasik 🇵🇱</h3>
          <i className="text-lg">Bachelor of Computer Science</i>
          <span className="mt-1 block text-5xl font-semibold text-heading">
            Front-end Developer
          </span>
          <p className="mt-5 text-lg leading-relaxed text-content">
            For the past 4 years, I have been passionate about web application development with a
            focus on the frontend. With over 2.5 years of professional experience as a developer. I
            have dedicated myself to furthering my knowledge in this ever-evolving field.
            <br />
            <br />I graduated from the West Pomeranian University of Technology with a
            bachelor&#39;s degree in computer science. Currently, I am studying management at the
            University of Szczecin on the weekends in pursuit of a master&#39;s degree.
          </p>
        </div>
        <Lottie animationData={animation} loop />
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
