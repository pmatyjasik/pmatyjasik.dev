import SectionHeading from 'components/SectionHeading/SectionHeading';
import Image from 'next/image';
import Button from 'atoms/Button/Button';
import Modal from 'components/ExperienceModal/ExperienceModal';
import {useState} from 'react';

const ExperienceSection = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section id="experience" className="full-width mt-5 px-2 py-10">
      <SectionHeading subheading="JOBS" heading="EXPERIENCE" inverted />
      <div className="mt-2 grid h-auto w-auto grid-cols-2 grid-rows-2 items-center justify-items-center md:grid-cols-4 md:grid-rows-1">
        <Image
          src="/fujitsu.png"
          width={200}
          height={200}
          alt="Fujitsu"
          className="transition-all hover:scale-110"
        />
        <Image
          src="/wp.png"
          width={200}
          height={200}
          alt="Wirtualna Polska"
          className="transition-all hover:scale-110"
        />
        <Image
          src="/etechnologie.png"
          width={250}
          height={250}
          alt="eTechnologie"
          className="transition-all hover:scale-110"
        />
        <Image
          src="/oirp.png"
          width={200}
          height={200}
          alt="OIRP"
          className="transition-all hover:scale-110"
        />
      </div>
      <div className="mt-4 hidden justify-center md:flex">
        <Button onClick={() => setShowModal(prev => !prev)}>Show more</Button>
      </div>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={() => setShowModal(prev => !prev)}
          title="EXPERIENCE"
        >
          <div className="grid w-auto grid-cols-[20%_80%] grid-rows-4 items-center justify-items-center gap-y-4">
            <Image src="/wp.png" width={50} height={50} alt="Wirtualna Polska" />
            <p>
              My role at the company involve developing and bug fixing. I actively take part in
              numerous projects, including creating user interfaces, implementing new
              functionalities, and resolving issues. I collaborate with the development team and
              system architects, participating in defining project architecture and establishing
              project requirements.
            </p>
            <Image src="/fujitsu.png" width={50} height={50} alt="Fujitsu" />
            <p>
              I actively participated in the development of an application for displaying and
              manipulating complex data, as well as resolving issues on both the front-end and
              back-end. I also collaborated in defining the application&#39;s requirements.
            </p>
            <Image src="/etechnologie.png" width={75} height={75} alt="eTechnologie" />
            <p>
              Took a central role in the creation and development of e-learning and e-commerce
              platforms, contributing to their design, implementation, and continuous improvement. I
              also took part in defining project requirements.
            </p>
            <Image src="/oirp.png" width={50} height={50} alt="OIRP" />
            <p>
              Providing technical support for online and in-person lessons, as well as managing
              student records.
            </p>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default ExperienceSection;
