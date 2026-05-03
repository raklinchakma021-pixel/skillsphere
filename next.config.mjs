/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
       domains: ["scontent.fcgp7-1.fna.fbcdn.net"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
