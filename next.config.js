/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    return config;
  },
};
