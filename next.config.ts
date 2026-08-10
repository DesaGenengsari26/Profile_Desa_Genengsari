import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === 'production' ? '/Profile_Desa_Genengsari' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
