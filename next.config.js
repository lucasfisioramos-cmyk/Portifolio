
/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const basePath = isGithubPages ? '/Portifolio' : '';

const nextConfig = {
  output: 'export',

  ...(isGithubPages && {
    trailingSlash: true,
    basePath: basePath,
  }),

  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;