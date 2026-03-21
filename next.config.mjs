/** @type {import('next').NextConfig} */
const nextConfig = {
  // This helps bypass the experimental Turbopack CSS parser
  transpilePackages: ["lucide-react"],
  // Explicitly tell Next.js NOT to use turbo for builds if possible
  poweredByHeader: false,
};

export default nextConfig;