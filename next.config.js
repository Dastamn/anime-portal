/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  webpack: config => {
    config.module.rules.push(
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      }
    );
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s4.anilist.co",
      },
    ],
  },
};
