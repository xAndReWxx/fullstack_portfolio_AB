import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fullstack_portfolio_AB",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
