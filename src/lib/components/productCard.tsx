'use client';
import { useCart } from '@/src/lib/stores/cart';
import { Product } from '@libtypes/productType';
import Image from 'next/image';
import Link from 'next/link';

type CardType = 'featured' | 'normal';

const ProductCard = ({
  product,
  cardType = 'normal',
}: {
  product: Product;
  cardType: CardType;
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id.toString(),
      name: product.title,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <Link
      href={`/products/${product.id}`}
      key={product.id}
      className={`group flex-grow snap-center flex-shrink-0 bg-white block p-4 rounded-lg ${
        cardType === 'featured' ? 'w-2xs' : 'w-full'
      } `}
    >
      <figure className="aspect-square p-4">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={200}
          className="rounded object-contain w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-in-out"
        />
      </figure>
      <div className="flex items-center justify-between">
        {cardType === 'featured' && (
          <span className="text-xs font-semibold text-blue-500 bg-blue-100 px-2 py-1 rounded-full">
            Featured
          </span>
        )}
        <span className="text-sm font-semibold text-gray-600">
          {product.category}
        </span>
      </div>
      <div>
        <h3 className="mt-2 font-semibold text-gray-800">{product.title}</h3>
        <p className="mt-2 text-lg font-semibold text-gray-800">
          ${product.price}
        </p>
        <div className="mt-2 flex justify-end">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart(product);
            }}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition duration-200 cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
