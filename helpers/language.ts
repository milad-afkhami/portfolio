import PageAttr from "@helpers/pageAttribute";
import Cookies from "@utils/cookies";
import { languages, defaultLanguage } from "@configs/languages";
import { LOCALE_COOKIE_KEY } from "@constants/cookies";

export default class LanguageHelper {
  static initialLanguageSetup(locale) {
    // const _locale: Languages =
    //   locale || Cookies.get(LOCALE_COOKIE_KEY, null) || defaultLanguage;
    // const language = languages[_locale];
    // PageAttr.setDirection(language.direction);
    // // PageAttr.setLanguage(language.name); handled by next.js now
    // PageAttr.setFont(language.name);
    // PageAttr.setPrefix();
    // // if (i18n.language !== language.name)
    // i18n.changeLanguage(language.name);
  }

  static changeLanguage(locale: Languages) {
    const language = languages[locale];
    if (!locale || !language) throw new Error("locale not found");

    Cookies.set(null, LOCALE_COOKIE_KEY, locale);
    window.location.reload();
  }
}
