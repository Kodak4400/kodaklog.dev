import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    siteName: "kodaklog",
    thumbnail: "/assets/kodaklog.webp"
  }
};

export default nextConfig;
