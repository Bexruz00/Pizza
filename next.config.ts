import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"just-eat.by"
      }
    ]
  }
};

export default nextConfig;
