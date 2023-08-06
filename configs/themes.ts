import Themes from "@constants/themes";
import lightTheme from "@constants/stylesheets/themes/LIGHT.json";

export const defaultTheme = Themes.Dark;

// generate palette variants
// we can use http://mcg.mbitson.com/
// export const themes = { [Themes.LIGHT]: require("./constants/themes/LIGHT.json"), [Themes.DARK]: require("./constants/themes/DARK.json") };

export const brandColor = lightTheme.brand.main;
