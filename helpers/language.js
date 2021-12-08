import i18n from "@i18n";
import { PageAttr } from "@helpers";
import { Cookies } from "@utils";
import { languages, LOCALE_COOKIE_KEY } from "@constants";

export class LanguageHelper {
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
    if (i18n.language !== language.name) i18n.changeLanguage(language.name);
  }

  static changeLanguage(locale) {
    const language = languages[locale];
    if (!locale || !language) throw new Error("locale not found");

    i18n.changeLanguage(language.name).then(() => {
      PageAttr.setDirection(language.direction);
      PageAttr.setLanguage(language.name);
      Cookies.set(null, LOCALE_COOKIE_KEY, locale);
    });
  }
}
