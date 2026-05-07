import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
};

export default withMDX(nextConfig);
