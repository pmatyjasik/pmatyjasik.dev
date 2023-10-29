import React, {ReactNode, useLayoutEffect} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import Button from 'atoms/Button/Button';
import useOutsideClick from 'hooks/useOutsideClick';

interface Props {
  title: string;
  showModal: boolean;
  setShowModal: () => void;
  children: ReactNode;
}

const Modal = ({title, showModal, setShowModal, children}: Props) => {
  useLayoutEffect(() => {
    showModal && document.body.classList.add('overflow-y-hidden');
  }, [showModal]);

  const closeModal = () => {
    showModal && setShowModal();
    document.body.classList.remove('overflow-y-hidden');
  };
  const refModal = useOutsideClick(() => {
    closeModal();
  });

  return (
    <div className="fixed inset-0 z-50 hidden items-center justify-center overflow-y-auto overflow-x-hidden bg-secondary bg-opacity-50 outline-none backdrop-blur-sm focus:outline-none md:flex">
      <div className="relative mx-auto my-6 w-[40rem] max-w-3xl">
        <div
          className="relative flex w-full flex-col rounded-lg border border-gray-300 bg-white shadow-lg"
          ref={refModal}
        >
          <div className="border-b border-gray-300 p-3">
            <div className="flex items-center justify-between rounded-b ">
              <p className="text-2xl text-heading">{title}</p>
              <AiOutlineClose
                onClick={closeModal}
                className="text-xl font-bold text-rose-500 hover:scale-110 hover:cursor-pointer"
              />
            </div>
          </div>
          <div className="relative my-4 flex-auto p-6 text-secondary">{children}</div>
          <div className="flex items-center justify-end rounded-b border-t border-solid border-gray-300 p-3">
            <Button onClick={closeModal}>CLOSE</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
