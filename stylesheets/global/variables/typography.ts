import { createGlobalStyle } from "styled-components";
import { typographyVariants } from "@stylesheets";
import { __reduce } from "@utils";

export const GlobalTypographies = createGlobalStyle((props) => {
  return __reduce(
    typographyVariants,
    (accumulatedStyles, typography, breakpoint) => {
      const variables = {
        ":root": __reduce(
          typography,
          (acc, { fontSize, fontWeight }, key) => ({
            ...acc,
            [`--font-size-${key}`]: fontSize,
            [`--font-weight-${key}`]: String(fontWeight),
          }),
          {}
        ),
      };

      return {
        ...(breakpoint === "default"
          ? variables
          : { [`@media (min-width: ${breakpoint}px)`]: variables }),
        ...accumulatedStyles,
      };
    },
    {}
  );
});
