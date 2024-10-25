/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false; // This line is crucial for React-PDF
    return config;
  },
};

export default nextConfig;
