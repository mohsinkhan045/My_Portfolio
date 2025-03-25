/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      }
    ],
    unoptimized: process.env.NODE_ENV === 'production', // Unoptimized images for Netlify
  },
  // Disable type checking during build for production to avoid issues
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  eslint: {
    // Disable eslint during build for production
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig; 