import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // Whenever Vercel sees /api/proxy/, it secretly fetches data from your VPS
        source: '/api/proxy/:path*',
        destination: 'http://192.210.135.211:3000/api/:path*', 
      },
    ]
  },
};

export default nextConfig;