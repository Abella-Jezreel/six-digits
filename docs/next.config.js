/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // If using the App Router
  },
  distDir: "docs/.next", // Ensures Vercel uses the correct build output
};

module.exports = nextConfig;
