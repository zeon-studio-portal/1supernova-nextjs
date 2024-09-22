const withMDX = require('@next/mdx')({
  // Specify the file extensions for MDX
  extension: /\.mdx?$/,
});

const config = require('./config/config.json');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Enable React's strict mode for better error handling
  reactStrictMode: true,

  // Set the base path based on the configuration
  basePath: config.base_path !== '/' ? config.base_path : '',

  // Control trailing slashes for URLs
  trailingSlash: config.site.trailing_slash,
};

// Export the combined MDX and Next.js configuration
module.exports = withMDX(nextConfig);
