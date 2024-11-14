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
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
      ],
    },
    
  }
export default nextConfig;
