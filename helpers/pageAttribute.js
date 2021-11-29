const fonts = {
  default: {
    link: "https://fonts.googleapis.com/css?family=Montserrat",
    name: "Montserrat",
  },
  en: {
    link: "https://fonts.googleapis.com/css?family=Montserrat",
    name: "Montserrat",
  },
  fa: {
    link: "./fonts/IRANYekan/css/fontiran.css",
    name: "iranyekan",
  },
};

export class PageAttr {
  static setAttr = (attribute, value) =>
    process.browser &&
    document.querySelector("html").setAttribute(attribute, value);

  static setDirection = (direction) => {
    if (!process.browser) return;
    this.setAttr("dir", direction);
  };

  static setLanguage = (language) => {
    if (!process.browser) return;
    this.setAttr("lang", language);
  };

  static setPrefix = () => {
    if (!process.browser) return;
    this.setAttr("prefix", "og: http://ogp.me/ns#");
  };

  static setFont = (language) => {
    if (!process.browser) return;
    const fontLinkElement = document.createElement("link");
    fontLinkElement.setAttribute("rel", "stylesheet");
    const head = document.querySelector("head");

    const lang = language.name;
    const font = fonts[lang] || fonts.default;

    fontLinkElement.setAttribute("href", font.link);
    const fontFamily = font.name;

    head.appendChild(fontLinkElement);
    document.querySelector("html").style.fontFamily = fontFamily;
  };

  static setThemeColor = (newTheme) => {
    if (!process.browser) return;
    const appleStatusBar = document?.querySelector(
      'meta[name="apple-mobile-web-app-status-bar-style"]'
    );
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", newTheme);
    appleStatusBar && appleStatusBar.setAttribute("content", newTheme);
  };
}
