import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { fr, en, de } from "./locales";

const options = {
  debug: true,

  lng: "en",

  resources: {
    en: { common: en.en },
    de: { common: de.de },
    fr: { common: fr.fr },
  },

  fallbackLng: "en",

  ns: ["common"],

  defaultNS: "common",

  // keySeparator: ">",
  nsSeparator: "|",
  react: {
    wait: false,
    bindI18n: "languageChanged loaded",
    bindStore: "added removed",
    nsMode: "default",
    useSuspense: true,
  },
};

i18n
  .use(initReactI18next)
  //   .use(LanguageDetector)
  .init(options);
//   .changeLanguage('en', (err, t) => {
//     if (err) return console.log('something went wrong loading', err);
//   });

export default i18n;
