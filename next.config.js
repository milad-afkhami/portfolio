// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
// const withPlugins = require("next-compose-plugins");
// const optimizedImages = require("next-optimized-images");
const { i18n } = require("./next-i18next.config");

/** @type {import("next").NextConfig} */
module.exports = {
  i18n,
  compiler: {
    styledComponents: true,
  },
  trailingSlash: false,
  // modularizeImports: { "next-seo": { transform: "next-seo/{{member}}" } },
};

// withPlugins([[optimizedImages, { optimizeImagesInDev: true }]],
