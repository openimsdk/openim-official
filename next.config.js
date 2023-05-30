/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openim-1253691595.cos.ap-nanjing.myqcloud.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
