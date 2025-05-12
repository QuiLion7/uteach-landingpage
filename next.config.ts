import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@tabler/icons-react", "motion"],
  experimental: {
    forceSwcTransforms: true,
  },
  webpack: (config) => {
    // Resolve conflicts with React 19 RC
    config.resolve.alias = {
      ...config.resolve.alias,
      react: process.env.NODE_MODULES_PATH
        ? `${process.env.NODE_MODULES_PATH}/react`
        : "react",
      "react-dom": process.env.NODE_MODULES_PATH
        ? `${process.env.NODE_MODULES_PATH}/react-dom`
        : "react-dom",
    };
    return config;
  },
};

export default nextConfig;
