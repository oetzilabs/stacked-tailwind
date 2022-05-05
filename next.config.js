const { determineBuildId } = require("./src/utils/build-id");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateBuildId: async () => {
    const buildId = await determineBuildId();
    console.log(`> Build ID: ${buildId}`);
    return buildId;
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
