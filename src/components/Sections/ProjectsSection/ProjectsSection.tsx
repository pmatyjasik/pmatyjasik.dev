import Button from 'atoms/Button/Button';
import ProjectItem from 'components/ProjectItem/ProjectItem';
import SectionHeading from 'components/SectionHeading/SectionHeading';
import Link from 'next/link';

const ProjectsSection = () => {
  return (
    <section id="projects" className="full-width mt-5 px-2 py-10 ">
      <SectionHeading subheading="PORTFOLIO" heading="LAST PROJECTS" inverted />
      <div className="mt-3">
        <ProjectItem
          src="/formslab.png"
          projectTitle="FormsLab"
          projectDescription="The application is under continuous development (open source). Technologies used: Next.js, Typescript, TailwindCSS, Firebase."
          projectLink="https://formslab.vercel.app/"
          githubLink="https://github.com/Ryczko/FormsLab"
        />
        <ProjectItem
          src="/yourbooks.png"
          projectTitle="YourBooks"
          projectDescription="The application was developed for an engineering thesis (for this reason I cannot share the source code). Technologies used: Next.js, Typescript, TailwindCSS, Firebase."
          projectLink="https://your-books-engineer.vercel.app/profile"
          githubLink="https://github.com/pmatyjasik/your-books"
        />
        <ProjectItem
          src="/quization.png"
          projectTitle="Quization"
          projectDescription="Project carried out at the University. Technologies used: Next.js, Typescript, TailwindCSS, Firebase."
          projectLink="https://quization.vercel.app/"
          githubLink="https://github.com/pmatyjasik/quization"
        />
      </div>
      <div className="mt-12 flex justify-center">
        <Link href="https://github.com/pmatyjasik" rel="noopener noreferrer" target="_blank">
          <Button>Check out my GitHub</Button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
