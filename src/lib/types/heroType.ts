type HeroProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string;
  imageAlt?: string;
  variant?: 'split' | 'panorama';
};

type SplitHeroProps = HeroProps & {
  imagePosition: 'left' | 'right';
};

export type { HeroProps, SplitHeroProps };
