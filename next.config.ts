/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows all domains
        port: '',        // No specific port needed
        pathname: '**',  // Allows all paths
      },
    ],
  },
};

module.exports = nextConfig;
