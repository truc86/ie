'use client';
import ProductCard from '@/src/lib/components/productCard';
import { Product } from '@libtypes/productType';
import { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredProducts(filtered);
  }, [products, searchTerm]);

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
        <p className="mt-4 text-gray-600 animate-pulse">Loading products...</p>
      </div>
    );

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="container mx-auto p-4">
      <div>
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-2 mb-4 border rounded"
          onChange={(e) => {
            const term = e.target.value;
            setSearchTerm(term);
          }}
        />
        <div className="flex justify-end gap-4 mb-4">
          <button
            className="p-2 border rounded cursor-pointer flex items-center gap-1"
            onClick={() => {
              setProducts((prevProducts) => {
                const sortedProducts = [...prevProducts].sort((a, b) =>
                  a.title.localeCompare(b.title),
                );
                return sortedProducts[0]?.title === prevProducts[0]?.title
                  ? sortedProducts.reverse()
                  : sortedProducts;
              });
            }}
          >
            Sort by Alphabet
          </button>
          <button
            className="p-2 border rounded cursor-pointer"
            onClick={() => {
              setProducts((prevProducts) => {
                const sortedProducts = [...prevProducts].sort(
                  (a, b) => a.price - b.price,
                );
                return sortedProducts[0]?.price === prevProducts[0]?.price
                  ? sortedProducts.reverse()
                  : sortedProducts;
              });
            }}
          >
            Sort by Price
          </button>
        </div>
      </div>
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <span className="text-xl font-semibold">
            Have a cookie as we have run out of products <br />
            Please try searching for something else
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-32 h-32"
          >
            <path
              className="fa-secondary dark:fill-white"
              opacity=".4"
              d="M16 237.1c0 6.1 .5 12.3 1.6 18.4l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c4.9 .7 9.8 1 14.7 1c17.2 0 34.3-4.2 49.7-12.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.3-5.3-9.3-10.6-10.1c-51.5-8.2-92.8-47.1-104.5-97.4c-1.8-7.6-8-13.4-15.7-14.6c-54.6-8.7-97.7-52-106.2-106.8c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6C19.6 205.1 16 221 16 237.1zM208 336a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm32-160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM400 304a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z"
            />
            <path
              className="fa-primary"
              d="M176 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM144 336a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
            />
          </svg>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((product: Product) => (
            <li
              key={product.id}
              className="shadow-md rounded-lg overflow-hidden mb-6 flex flex-col h-full"
            >
              <ProductCard product={product} cardType={'normal'} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;
