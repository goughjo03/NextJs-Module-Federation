/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: "MfExample",
        remoteType: "var",
        remotes: {
          MfExample: 'MfExample',
        },
        exposes: {},
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            }
          },
          {
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: false,
            }
          },
        ]
      })
    )
    config.module.rules.push({
      test: /_document.tsx/,
      loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
    });

    return config;
  }
}

module.exports = nextConfig
