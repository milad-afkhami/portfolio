import Themes from "@constants/themes";

export const defaultTheme = Themes.Light;

// generate palette variants
// we can use http://mcg.mbitson.com/
// export const themes = { [Themes.LIGHT]: require("./constants/themes/LIGHT.json"), [Themes.DARK]: require("./constants/themes/DARK.json") };

export const brandColor = require(`./constants/themes/${defaultTheme}.json`)
  ?.brand?.main;
