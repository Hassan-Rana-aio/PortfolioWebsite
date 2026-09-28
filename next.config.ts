import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/styles')],
  },
  async redirects() {
    // Keep the old CV link working for anyone who saved it.
    return [
      {
        source: '/Muhammad%20Hassan%20Rana.pdf',
        destination: '/Muhammad-Hassan-Rana-CV.pdf',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:file(.*\\.pdf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
