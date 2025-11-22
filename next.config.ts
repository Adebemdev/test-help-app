import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    qualities: [100, 25, 50, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend-api.helpappafrica.com",
      },
    ],
  },
};

export default nextConfig;
