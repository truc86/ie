'use client';
import { useCart } from '@/src/lib/stores/cart';
import { Product } from '@/src/lib/types/productType';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProductPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { productId } = useParams();

  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id.toString(),
      name: product.title,
      price: product.price,
      quantity: 1,
    });
  };

  useEffect(() => {
    const fetchProduct = async (productId: string) => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data: Product = await response.json();
        setProduct(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
    if (typeof productId === 'string') {
      fetchProduct(productId);
    } else {
      setError('Invalid product ID');
      setLoading(false);
    }
  }, [productId]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="relative">
          <svg
            className="animate-spin h-12 w-12 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
        <p className="mt-4 text-gray-600 animate-pulse">Loading product...</p>
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 text-center mt-4">
        <p>{error}</p>
      </div>
    );

  return (
    <>
      {product && (
        <div className="container mx-auto p-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 mb-4 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200 shadow-sm"
            onClick={() => {
              sessionStorage.setItem(
                'scrollPosition',
                window.scrollY.toString(),
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            Back to Products
          </Link>
          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <figure className="aspect-square md:aspect-auto md:w-1/3 p-8 dark:bg-white rounded-lg">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </figure>
            <div className="md:w-2/3">
              <div className="mb-2 flex items-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {product.category}
                </span>
              </div>
              <h1 className="text-2xl font-bold">{product.title}</h1>
              <p className="mt-2">{product.description}</p>
              <p className="mt-2 ">
                Rating:{' '}
                <span className="text-amber-300">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </p>
              <p className="text-xl font-semibold mt-4">
                Price: ${product.price}
              </p>
              <button
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded shadow-md hover:bg-green-600 transition duration-200 cursor-pointer"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
