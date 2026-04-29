import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fullstack_portfolio_ME",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
