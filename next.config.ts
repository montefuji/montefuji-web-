import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/semiejes-subaru-forester",
        destination: "/semiejes-subaru",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
