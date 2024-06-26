/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openim-1253691595.cos.ap-nanjing.myqcloud.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.xcxwo.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.pgyer.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
