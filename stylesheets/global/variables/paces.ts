import { createGlobalStyle } from "styled-components";
import { paces } from "@stylesheets";
import { __reduce } from "@utils";

export const GlobalPaces = createGlobalStyle((props) => {
  return {
    ":root": __reduce(
      paces,
      (acc, cv, key) => ({ ...acc, [`--pace-${key}`]: cv }),
      {}
    ),
  };
});
