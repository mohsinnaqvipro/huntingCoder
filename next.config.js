/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  trailingSlash: true,
  future: { webpack5: true },
};

module.exports = nextConfig;
