/** @type {import('next').NextConfig} */


const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
    // assetPrefix:'https://<Account-name>/<Repository-name>',
  // basePath: isProd ? '/lasseq' : '',
  distDir: 'out',
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
