import Themes from "@constants/themes";

export const defaultTheme = Themes.Dark;

// generate palette variants
// we can use http://mcg.mbitson.com/
// export const themes = { [Themes.LIGHT]: require("./constants/themes/LIGHT.json"), [Themes.DARK]: require("./constants/themes/DARK.json") };

export const brandColor =
  require(`@constants/stylesheets/themes/${defaultTheme}.json`)?.brand?.main;