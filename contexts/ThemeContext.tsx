import { useState, useEffect, createContext } from "react";
import { ThemeProvider as STThemeProvider } from "styled-components";
import { defaultTheme, themes } from "@stylesheets/themes";
import { getWidth } from "@utils/dimensions";
import Cookies from "@utils/cookies";
import __cloneDeep from "lodash-es/cloneDeep";
import { PLATFORMS } from "@constants";
import PageAttr from "@helpers/pageAttribute";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeContext, setThemeContext] = useState({
    theme: Cookies.get("theme") || defaultTheme,
    platform: getWidth()
      ? getWidth() > 768
        ? PLATFORMS.MOBILE
        : PLATFORMS.DESKTOP
      : Cookies.get("platform") || process.env.APP_PLATFORM || PLATFORMS.MOBILE,
  });

  useEffect(() => {
    if (themeContext.theme !== Cookies.get("theme"))
      Cookies.set("theme", themeContext.theme);
    if (themeContext.platform !== Cookies.get("platform"))
      Cookies.set("platform", themeContext.platform);
  }, []);

  const setContext = (newCtx) => {
    const { theme: _theme, platform: _platform } = newCtx;
    const _themeContext = __cloneDeep(themeContext);

    if (_theme)
      if (typeof _theme === "string" && themes[_theme]) {
        // if there is a new theme and it fits
        PageAttr.setThemeColor(themes[_theme].brand.main);
        Cookies.set("theme", _theme);
        _themeContext.theme = _theme;
      } else throw new Error("theme not found!");

    if (_platform)
      if (typeof _theme === "string" && PLATFORMS[_platform]) {
        // if there is a new platform and it fits
        Cookies.set("platform", _platform);
        _themeContext.platform = _platform;
      } else throw new Error("platform not found!");

    setThemeContext(_themeContext);
  };

  return (
    <ThemeContext.Provider
      value={{
        ...themeContext,
        setContext,
      }}
    >
      <STThemeProvider theme={themeContext}>{children}</STThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
