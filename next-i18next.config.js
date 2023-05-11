// const path = require('path')
// const localePath = path.resolve('./public/locales')

/** @type {import("next-i18next").UserConfig} */
module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "fa",
    locales: ["fa"],
  },
  fallbackNS: "common",
  // localePath,
  reloadOnPrerender: process.env.NODE_ENV === "development",
  // serializeConfig: false,
};
