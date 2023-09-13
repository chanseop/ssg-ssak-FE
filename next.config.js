/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["m.shinsegaepoint.com","s3-alpha-sig.figma.com"],
  },
  env: {
    NEXT_PUBLIC_API_URL: 'http://10.10.10.185:8000',
  },

};

module.exports = nextConfig;
