/** @type {import('next').NextConfig} */
const nextConfig = {
  // Empty config to satisfy the check
  turbopack: {},
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;