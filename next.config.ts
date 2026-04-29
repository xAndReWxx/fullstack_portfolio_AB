import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/fullstack_portfolio_AB" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
