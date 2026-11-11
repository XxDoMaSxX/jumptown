/** @type {import('next').NextConfig} */

// Static export for GitHub Pages (and any static host).
// basePath is empty by default, which is correct for a custom domain
// (e.g. jumptown.lt) or a <user>.github.io repo. If you deploy to a project
// subpath like https://<user>.github.io/jumptown/, set NEXT_BASE_PATH=/jumptown
// (the GitHub Actions workflow can do this automatically — see the workflow file).
const basePath = process.env.NEXT_BASE_PATH || ''

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
  // The template ships an ESLint 9 config that is incompatible with Next 14's
  // lint runner; linting is not part of the deploy, so don't let it block builds.
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })
    return config
  },
}

export default nextConfig
