/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "out", // 指定输出目录为 'out'
  output: "export", // 如果部署到静态网站，需要此配置
  images: {
    unoptimized: true, // 静态导出时需要
  },
};

export default nextConfig;
