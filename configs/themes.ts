import Themes from "@constants/themes";
import lightTheme from "@constants/stylesheets/themes/LIGHT.json";

export const defaultTheme = Themes.Dark;

// generate palette variants
// we can use http://mcg.mbitson.com/
// export const themes = { [Themes.LIGHT]: require("./constants/themes/LIGHT.json"), [Themes.DARK]: require("./constants/themes/DARK.json") };

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
export const brandColor = lightTheme.brand.primary.main;
