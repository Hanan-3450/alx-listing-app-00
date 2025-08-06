/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "example.com", // if you still have any placeholder images
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
