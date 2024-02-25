// next.config.mjs
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: '/gusa-editor-banners',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;