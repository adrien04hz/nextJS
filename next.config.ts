import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns:
      [
        {
          protocol: "https",
          hostname: "i.abcnewsfe.com"
        },
        {
          protocol: "https",
          hostname: "tuk-cdn.s3.amazonaws.com"
        }
      ]
  }
};

export default nextConfig;
