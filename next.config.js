const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const domain = process.env.REACT_APP_BASE_URL;

module.exports = {
  env: {
    REACT_APP_BASE_URL: "lapertwear.com",
    REACT_APP_API_BASE_URL: "/api/proxy",
    REACT_APP_EXTERNAL_API_BASE_URL: "http://tpi.uneed.ir:7900",
    // REACT_APP_FONT_ICON_API_TOKEN: "8716B435-A59C-44AB-9167-70E02B137A37",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["en"],
    // locales: ["en", "fa"],
    defaultLocale: "en",
  },
  experimental: {
    craCompat: true,
  },
  images: {
    domains: ["s3-us-west-2.amazonaws.com"],
  },
};
