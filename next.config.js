// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
// const withPlugins = require("next-compose-plugins");
// const optimizedImages = require("next-optimized-images");
const { i18n } = require("./next-i18next.config");

/** @type {import("next").NextConfig} */
module.exports = {
  env: {
    // REACT_APP_BASE_URL: "https://mili-portfolio.vercel.app",
    REACT_APP_BASE_URL: "https://milad-afkhami.com",
    REACT_APP_IMAGE_BASE_URL: "https://2q23wr5n.tinifycdn.com",
    REACT_APP_EXTERNAL_API_BASE_URL: "/api",
  },
  i18n,
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
  images: {
    loader: "custom",
  },
};

// withPlugins([[optimizedImages, { optimizeImagesInDev: true }]],
