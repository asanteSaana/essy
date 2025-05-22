/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.divadivinehair.com',
        pathname: '/cdn/shop/products/**',
      },
      {
        protocol: 'https',
        hostname: 'www.adorablehairdo.com',
        pathname: '/cdn/shop/products/**',
      },
    ],
  },
};

module.exports = nextConfig;
