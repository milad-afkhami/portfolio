// const path = require('path')
// const localePath = path.resolve('./public/locales')

// const { languages, defaultLanguage } = require("./configs/languages");

/** @type {import("next-i18next").UserConfig} */
module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  // debug: process.env.NODE_ENV === "development",
  i18n: { defaultLocale: "en", locales: ["en"] },
  // i18n: { defaultLocale: defaultLanguage, locales: Object.keys(languages) },
  fallbackNS: "common",
  // localePath,
  reloadOnPrerender: process.env.NODE_ENV === "development",
  // serializeConfig: false,
};
