import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    qualities: [25, 50, 75, 90],
  },
  async rewrites() {
    return [
      {
        source: "/rss",
        destination: "/rss.xml",
      },
      {
        source: "/registry/rss",
        destination: "/components/rss.xml",
      },
    ];
  },
};

export default nextConfig;
