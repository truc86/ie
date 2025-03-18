import { HeroProps } from '@libtypes/heroType';
import Image from 'next/image';

const HeroPanoramaLayout = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
}: HeroProps) => {
  return (
    <div className="relative w-full h-[50vh] sm:h-[30vh] md:h-[40vh] lg:h-[50vh] min-h-[] overflow-hidden">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt || ''}
          fill
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-8">{description}</p>
        <a href={buttonLink}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroPanoramaLayout;
