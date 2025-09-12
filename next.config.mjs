/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "randomuser.me",
        },        {
          protocol: "http",
          hostname: "localhost",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
      ],
    },
    
  }
export default nextConfig;
