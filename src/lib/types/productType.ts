type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  price: number;
  image: string;
};

export type { Product };
