'use client';

import { Product } from '@libtypes/productType';
import ProductCard from './productCard';

const FeatureProducts = ({ products }: { products: Product[] }) => {
  return (
    <div className="overflow-x-auto snap-x scroll-smooth pb-4">
      <div className="flex space-x-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cardType={'featured'}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
