import { createGlobalStyle } from "styled-components";
import { curves } from "@stylesheets";
import { __reduce } from "@utils";

export const GlobalCurves = createGlobalStyle((props) => {
  return {
    ":root": __reduce(
      curves,
      (acc, cv, key) => ({ ...acc, [`--curve-${key}`]: cv }),
      {}
    ),
  };
});
