import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/servicos",
        destination: "/servicos/polimento",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
