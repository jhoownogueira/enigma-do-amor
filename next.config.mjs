/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: false,
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.ogg$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/media/",
          outputPath: `${isServer ? "../" : ""}static/media/`,
          name: "[name]-[hash].[ext]",
          esModule: false,
        },
      },
    });

    return config;
  },
};

export default nextConfig;
