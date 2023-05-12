import { createGlobalStyle } from "styled-components";
import spacings from "@stylesheets/constants/spacing";
import __reduce from "lodash-es/reduce";

const GlobalSpacings = createGlobalStyle((props) => {
  return {
    ":root": __reduce(
      spacings,
      (acc, cv, key) => ({ ...acc, [`--spacing-${key}`]: cv }),
      {}
    ),
  };
});

export default GlobalSpacings;
