import { createGlobalStyle } from "styled-components";
import { color } from "@stylesheets";
import { themes, defaultTheme } from "@stylesheets";
import __reduce from "lodash-es/reduce";
import { Color } from "@models";

const prepareColorVars = (name, variants) =>
  variants instanceof Color
    ? color(name, ...Object.values(variants))
    : __reduce(
        variants,
        (acc, cv, key) => ({
          ...acc,
          ...prepareColorVars(`${name ? `${name}-` : ""}${key}`, cv),
        }),
        {}
      );



const GlobalColors = createGlobalStyle((props) => {
  return {
    ...__reduce(
      themes,
      (acc, cv, key) => {
        const themeColors = prepareColorVars("color", cv);
        const scope =
          key === defaultTheme ? ":root" : `:root[data-theme='${key}']`;
        return { ...acc, [scope]: themeColors };
      },
      {}
    ),
  };
});

            export default GlobalColors;