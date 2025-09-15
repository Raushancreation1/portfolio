/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // Disable turbopack for production builds
  experimental: {
    turbo: false,
  },
  // Enable static exports for GitHub Pages
  output: 'export',
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
};

module.exports = nextConfig;
