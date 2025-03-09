import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mj-ahmad.github.io",
        pathname: "/mja2025/**",
      },
      {
        protocol: "https",
        hostname: "www.nusuk.sa",
      },
    ],
  },
  // other config options here
};

export default nextConfig;
