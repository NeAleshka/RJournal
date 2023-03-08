/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'web24.com.ua',
      'www.google.com',
      'toppng.com',
      'static.vecteezy.com',
      'png.pngtree.com',
      'leonardo.osnova.io',
    ],
  },
};

module.exports = nextConfig;
