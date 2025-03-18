import { HeroProps } from '@libtypes/heroType';
import HeroPanoramaLayout from './heroPanoramaLayout';
import HeroSplitLayout from './heroSplitLayout';

const AbstractHero = ({
  title = 'Welcome to Our Store',
  description = 'Discover the best products just for you!',
  buttonText = 'Shop Now',
  buttonLink = '#',
  imageSrc,
  imageAlt = 'Hero Image',
  variant = 'split',
}: HeroProps) => {
  switch (variant) {
    case 'panorama':
      return (
        <HeroPanoramaLayout
          title={title}
          description={description}
          buttonText={buttonText}
          buttonLink={buttonLink}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
        />
      );
    case 'split':
      return (
        <HeroSplitLayout
          title={title}
          description={description}
          buttonText={buttonText}
          buttonLink={buttonLink}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          imagePosition="left"
        />
      );
  }
};

export default AbstractHero;
