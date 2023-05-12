const fonts = {
  // default: { link: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap", name: "Montserrat" },
  default: {
    name: "IBM Plex Sans,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
  },
  // default: { name: "sans-serif" },
  // en: {
  //   link: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap",
  //   name: "Montserrat",
  // },
};

 PageAttr {
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

    if (font?.link) fontLinkElement.setAttribute("href", font.link);

    head.appendChild(fontLinkElement);

    const fontFamily = font?.name;
    if (fontFamily)
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

    if (appleStatusBar) appleStatusBar.setAttribute("content", newTheme);
  };
}

            export default class