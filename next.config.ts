import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  env: {
    siteName: "kodaklog",
    thumbnail: "assets/kodaklog.webp"
  }
};

export default nextConfig;
