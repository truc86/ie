import { SplitHeroProps } from '@libtypes/heroType';
import Image from 'next/image';

const HeroSplitLayout = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  imagePosition = 'left',
}: SplitHeroProps) => {
  return (
    <div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 ${
          imagePosition === 'left' && 'md:flex-row'
        } ${imagePosition === 'right' && 'md:flex-row-reverse'} p-4`}
      >
        <div className="order-2 md:order-1">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-700 mb-8">{description}</p>
          {buttonText && buttonLink && (
            <a href={buttonLink}>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                {buttonText}
              </button>
            </a>
          )}
        </div>

        {imageSrc && (
          <figure className="order-1 md:order-2">
            <Image
              src={imageSrc}
              alt={imageAlt || ''}
              width={800}
              height={600}
              className="mb-6 md:mb-0 max-w-full h-auto"
            />
          </figure>
        )}
      </div>
    </div>
  );
};

export default HeroSplitLayout;
