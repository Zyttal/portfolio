import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/portfolio",
  output: "export", 
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;

export default nextConfig;
