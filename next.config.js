/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["m.shinsegaepoint.com","s3-alpha-sig.figma.com"],
  },
  env: {
    NEXTAUTH_SECRET:'mLwkryvhB60SjELI4g/xnIV/sq9VZznaRjhxTJ8zkI8=',
    NEXT_PUBLIC_API_URL:'http://15.164.17.12:80'
    // 15.164.17.12
  },


};

module.exports = nextConfig;
