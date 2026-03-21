/** @type {import('next').NextConfig} */
const nextConfig = {
  // Adding an empty webpack config forces Next.js to use Webpack instead of Turbo
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;