import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.resolve("."),
  },
  async rewrites() {
    return [
      // The statically exported license-market demo references its images from
      // the site root ("/foto/..."), so map them onto the demo folder.
      { source: "/foto/:path*", destination: "/demos/license/foto/:path*" },
    ];
  },
};

export default nextConfig;
