/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920], // 配置常见屏幕宽度，限制 nextjs 生成的图片大小
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],      // 配置图标/小图，限制 nextjs 生成的图片大小
    formats: ["image/avif", "image/webp"], // 浏览器支持时，Next.js 会自动返回 更小的 AVIF/WebP，不支持则回退原图。NOTE: avif 转化速度很慢，开发模式下建议不转为 avif
    // formats: ["image/webp"],
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
