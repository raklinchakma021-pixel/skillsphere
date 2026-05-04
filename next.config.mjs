/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        search: '',
      },
      {
        protocol: "https",
        hostname: "scontent.fcgp7-1.fna.fbcdn.net",
      }
    ],
  },
};

export default nextConfig;
