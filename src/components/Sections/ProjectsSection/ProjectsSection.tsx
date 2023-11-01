import Button from 'atoms/Button/Button';
import ProjectItem from 'components/ProjectItem/ProjectItem';
import SectionHeading from 'components/SectionHeading/SectionHeading';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';
import {motion} from 'framer-motion';
import Link from 'next/link';

const ProjectsSection = () => (
  <SectionWrapper className="mt-8 md:mt-20">
    <SectionHeading subheading="PORTFOLIO" heading="LAST PROJECTS" inverted />
    <motion.div
      className="mt-3"
      initial={{opacity: 0.01}}
      whileInView={{opacity: 1}}
      viewport={{once: true, amount: 0.1}}
      transition={{duration: 1}}
    >
      <ProjectItem
        src="/projects/formslab.png"
        projectTitle="FormsLab"
        projectDescription="The application is under continuous development (open source). Technologies used: Next.js, Typescript, TailwindCSS, Firebase."
        projectLink="https://formslab.vercel.app/"
        githubLink="https://github.com/Ryczko/FormsLab"
      />
      <ProjectItem
        src="/projects/yourbooks.png"
        projectTitle="YourBooks"
        projectDescription="The application was developed for an engineering thesis. Technologies used: Next.js, Typescript, TailwindCSS, Firebase."
        projectLink="https://your-books-engineer.vercel.app/profile"
        githubLink="https://github.com/pmatyjasik/your-books"
      />
      <ProjectItem
        src="/projects/quization.png"
        projectTitle="Quization"
        projectDescription="Project carried out at the University. Technologies used: Next.js, Typescript, TailwindCSS, Firebase."
        projectLink="https://quization.vercel.app/"
        githubLink="https://github.com/pmatyjasik/quization"
      />
    </motion.div>
    <motion.div
      className="mt-8 flex justify-center"
      initial={{opacity: 0.3}}
      whileInView={{opacity: 1}}
      viewport={{once: true, amount: 0.7}}
      transition={{duration: 0.5}}
    >
      <Link href="https://github.com/pmatyjasik" rel="noopener noreferrer" target="_blank">
        <Button>Check out my GitHub</Button>
      </Link>
    </motion.div>
  </SectionWrapper>
);

export default ProjectsSection;
