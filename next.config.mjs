/** @type {import('next').NextConfig} */
const nextConfig = {
  // If the error persists, you can try disabling experimental turbo 
  // features to see if it defaults to a more stable Webpack build:
  experimental: {
    turbo: {
      rules: {
        '*.css': ['postcss-loader'],
      },
    },
  },
};

export default nextConfig;