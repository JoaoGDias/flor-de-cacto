/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "flor-de-cactos.local",
        },
      ],
    },
    
  }
export default nextConfig;
