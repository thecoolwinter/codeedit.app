/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com/user-attachments/assets/',
        port: '',
        pathname: '/user-attachments/assets/*/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: 'www.apple.com',
        port: '',
        pathname: '/*/**',
      },
    ],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });


    config.module.rules.push({
      test: /\.mp4$/,
      use: "file-loader?name=videos/[name].[ext]"
    });


    // Ignore XML files in the public directory
    config.module.rules.push({
      test: /\.xml$/,
      include: /public/,
      type: 'asset/resource',
    });

    return config;
  },
};

module.exports = nextConfig;
