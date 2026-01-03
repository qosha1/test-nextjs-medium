/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Custom webpack config - this would have caused Turbopack error in Next.js 16+
  // before the fix that injects turbopack: {} alongside standalone output
  webpack: (config, { isServer }) => {
    // Example: Add a custom alias
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './'),
    };
    return config;
  },
};

module.exports = nextConfig;
