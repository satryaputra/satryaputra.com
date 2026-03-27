import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    qualities: [25, 50, 75, 90],
  },
};

export default nextConfig;
