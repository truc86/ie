import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['fakestoreapi.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/products/**',
      },
    ],
  },
};

export default nextConfig;
