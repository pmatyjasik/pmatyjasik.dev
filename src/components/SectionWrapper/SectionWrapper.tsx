import {ReactNode} from 'react';
import {twMerge} from 'tailwind-merge';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}
const SectionWrapper = ({children, className}: SectionWrapperProps) => (
  <section className={twMerge('full-width px-2 py-10', className)}>{children}</section>
);

export default SectionWrapper;
