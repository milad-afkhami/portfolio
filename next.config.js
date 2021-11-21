const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const domain = process.env.REACT_APP_BASE_URL;

module.exports = {
  env: {
    REACT_APP_BASE_URL: "lapertwear.com",
    REACT_APP_API_BASE_URL: "/api/proxy",
    REACT_APP_EXTERNAL_API_BASE_URL: "http://tpi.uneed.ir:7900",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["fa"],
    // locales: ["fa", "en"],
    defaultLocale: "fa",
  },
  experimental: {
    craCompat: true,
  },
  images: {
    domains: ["s3-us-west-2.amazonaws.com"],
  },
};
