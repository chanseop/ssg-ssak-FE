/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["m.shinsegaepoint.com","s3-alpha-sig.figma.com"],
  },
  env: {
    NEXT_PUBLIC_API_URL: 'http://15.164.17.12:8000/',
  },

};

module.exports = nextConfig;
