/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["uploads-ssl.webflow.com"],
  },
};

module.exports = nextConfig;
