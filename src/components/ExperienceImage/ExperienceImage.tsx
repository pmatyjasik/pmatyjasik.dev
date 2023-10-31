import Image from 'next/image';

interface ExperienceImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
}
const ExperienceImage = ({src, alt, height = 200, width = 200}: ExperienceImageProps) => (
  <Image
    src={src}
    width={height}
    height={width}
    alt={alt}
    className="transition-all hover:scale-110"
  />
);

export default ExperienceImage;
