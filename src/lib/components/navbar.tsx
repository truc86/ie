'use client';

import { useCart } from '@/src/lib/stores/cart';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const { cart } = useCart();

  const linkClasses = (path: string) =>
    `mr-4 px-3 py-1 rounded-md transition-colors duration-200 ${
      pathname === path
        ? 'text-white bg-black'
        : 'text-gray-600 hover:text-black hover:bg-gray-100'
    }`;

  return (
    <nav className="flex items-center justify-between p-4 sticky top-0 shadow-md z-50 bg-white dark:bg-gray-800">
      <Link href="/" className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 dark:fill-white"
          viewBox="0 0 512 512"
        >
          <path d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-8 0c-35.3 0-64 28.7-64 64l0 8-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 48-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 48-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 8c0 35.3 28.7 64 64 64l8 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 48 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 48 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 8 0c35.3 0 64-28.7 64-64l0-8 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-48 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-48 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-8c0-35.3-28.7-64-64-64l-8 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-48 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-48 0 0-40zM400 128l0 256c0 8.8-7.2 16-16 16l-256 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l256 0c8.8 0 16 7.2 16 16zM192 160c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-128 0zm16 48l96 0 0 96-96 0 0-96z" />
        </svg>
        <span className="text-xl font-bold dark:text-white ml-4">
          Infinity Electronics
        </span>
      </Link>

      <div className="hidden md:flex items-center">
        <Link href="/products" className={linkClasses('/products')}>
          Products
        </Link>
        <Link href="/about" className={linkClasses('/about')}>
          About
        </Link>
        <Link href="/contact" className={linkClasses('/contact')}>
          Contact
        </Link>
        <button
          onClick={() => setCartOpen(true)}
          className="relative rounded-full bg-gray-200 dark:bg-gray-700 p-4 ml-4 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-600 hover:text-black dark:fill-white"
            viewBox="0 0 576 512"
          >
            <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l45.5 0c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5L488 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-288.3 0c-11.5 0-21.4-8.2-23.6-19.5L170.7 288l288.5 0c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32l-411 0C111 12.8 91.6 0 69.5 0L24 0zM131.1 80l389.6 0L482.4 222.2c-2.8 10.5-12.3 17.8-23.2 17.8l-297.6 0L131.1 80zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cart.reduce((sum, i) => sum + i.quantity, 0)}
          </span>
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => setCartOpen(true)}
          className="relative rounded-full bg-gray-200 dark:bg-gray-700 p-4 mr-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-600 hover:text-black dark:fill-white"
            viewBox="0 0 576 512"
          >
            <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l45.5 0c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5L488 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-288.3 0c-11.5 0-21.4-8.2-23.6-19.5L170.7 288l288.5 0c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32l-411 0C111 12.8 91.6 0 69.5 0L24 0zM131.1 80l389.6 0L482.4 222.2c-2.8 10.5-12.3 17.8-23.2 17.8l-297.6 0L131.1 80zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cart.reduce((sum, i) => sum + i.quantity, 0)}
          </span>
        </button>
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 dark:fill-white"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b dark:border-gray-700">
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="float-right p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 dark:fill-white"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
          <h2 className="text-xl font-bold dark:text-white">Menu</h2>
        </div>
        <div className="p-4 flex flex-col">
          <Link
            href="/products"
            className={`mb-3 px-3 py-2 rounded-md transition-colors duration-200 ${
              pathname === '/products'
                ? 'text-white bg-black'
                : 'text-gray-600 hover:text-black hover:bg-gray-100'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/about"
            className={`mb-3 px-3 py-2 rounded-md transition-colors duration-200 ${
              pathname === '/about'
                ? 'text-white bg-black'
                : 'text-gray-600 hover:text-black hover:bg-gray-100'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`mb-3 px-3 py-2 rounded-md transition-colors duration-200 ${
              pathname === '/contact'
                ? 'text-white bg-black'
                : 'text-gray-600 hover:text-black hover:bg-gray-100'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-lg font-bold dark:text-white">Your Cart</h2>
          <button
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 dark:fill-white"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-full">
          {cart.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-300">
              Your cart is empty.
            </p>
          ) : (
            <>
              <div className="mb-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="mb-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-semibold dark:text-white">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-300">
                        Qty: {item.quantity} &times; ${item.price}
                      </p>
                    </div>
                    <p className="text-sm font-semibold dark:text-white">
                      ${(item.quantity * item.price).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-auto">
                <div className="flex justify-between mb-4">
                  <span className="font-bold text-lg dark:text-white">
                    Total:
                  </span>
                  <span className="font-bold text-lg dark:text-white">
                    $
                    {cart
                      .reduce(
                        (sum, item) => sum + item.quantity * item.price,
                        0,
                      )
                      .toFixed(2)}
                  </span>
                </div>
                <button
                  className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md transition-colors duration-200"
                  onClick={() => console.log('Checkout clicked')}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {cartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out"
          onClick={() => setCartOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
