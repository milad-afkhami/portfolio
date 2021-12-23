import { createGlobalStyle } from "styled-components";
import { spacings } from "@stylesheets";
import { __reduce } from "@utils";

export const GlobalSpacings = createGlobalStyle((props) => {
  return {
    ":root": __reduce(
      spacings,
      (acc, cv, key) => {
        acc[`--spacing-${key}`] = cv;
        return acc;
      },
      {}
    ),
  };
});
