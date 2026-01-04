import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api.microlink.io",
            },
            {
                protocol: "https",
                hostname: "media.licdn.com",
            },
        ],
    },
};

export default nextConfig;
