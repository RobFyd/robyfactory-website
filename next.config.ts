import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProduction ? "/robyfactory-website" : "",
  assetPrefix: isProduction ? "/robyfactory-website/" : "",
};

export default nextConfig;
