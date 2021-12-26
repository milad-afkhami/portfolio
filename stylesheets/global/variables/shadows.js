import { createGlobalStyle } from "styled-components";
import { shadows } from "@stylesheets";
import { __reduce } from "@utils";

export const GlobalShadows = createGlobalStyle((props) => {
  return {
    ":root": __reduce(
      shadows,
      (acc, cv, key) => ({ ...acc, [`--shadow-${key}`]: cv }),
      {}
    ),
  };
});
