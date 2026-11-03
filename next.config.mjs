/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/emergency-plumbing', destination: '/plumbing-services/', permanent: true },
      { source: '/leak-detection-and-repairs', destination: '/plumbing-services/', permanent: true },
      { source: '/blocked-drains-and-toilets', destination: '/plumbing-services/', permanent: true },
      { source: '/bathroom-and-kitchen-plumbing', destination: '/residential-plumbing/', permanent: true },
      { source: '/stormwater-and-pump-services', destination: '/plumbing-services/', permanent: true },
      { source: '/roof-plumbing-and-leak-inspections', destination: '/plumbing-services/', permanent: true },
      { source: '/pre-purchase-plumbing-inspections', destination: '/residential-plumbing/', permanent: true },
      { source: '/team/jnf-plumbing-cairns', destination: '/team/jungle-perch-plumbing-services/', permanent: true },
    ];
  },
  images: { unoptimized: true, remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
};
export default nextConfig;
