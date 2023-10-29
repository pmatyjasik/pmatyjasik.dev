import React, {useEffect, useState} from 'react';

const useCloseComponent = (ref: React.RefObject<HTMLElement>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node) && isOpen) {
        setIsOpen(prev => !prev);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, ref]);
  return [isOpen, setIsOpen] as const;
};

export default useCloseComponent;
