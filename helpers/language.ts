// import i18n from "react-i18next";
import PageAttr from "@helpers/pageAttribute";
import Cookies from "@utils/cookies";
import languages from "@constants/languages";
import { LOCALE_COOKIE_KEY } from "@constants/cookies";
import Router from "next/router";

export default class LanguageHelper {
  static getDefaultLocale = () => {
    return Object.keys(languages)[0];
  };

  static initialLanguageSetup(locale) {
    const _locale =
      locale || Cookies.get(LOCALE_COOKIE_KEY) || this.getDefaultLocale();
    const language = languages[_locale];

    PageAttr.setDirection(language.direction);
    // PageAttr.setLanguage(language.name); handled by next.js now
    PageAttr.setFont(language.name);
    PageAttr.setPrefix();
    // if (i18n.language !== language.name)
    i18n.changeLanguage(language.name);
  }

  static changeLanguage(locale) {
    const language = languages[locale];
    if (!locale || !language) throw new Error("locale not found");

    return i18n.changeLanguage(language.name).then(() => {
      PageAttr.setDirection(language.direction);
      PageAttr.setLanguage(language.name);
      Cookies.set(null, LOCALE_COOKIE_KEY, locale);

      const path =
        (locale === Router.defaultLocale ? "" : `/${locale}`) + Router.asPath;

      return Router.replace(path, undefined, { locale });
    });
  }
}
