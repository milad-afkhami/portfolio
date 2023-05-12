import { createGlobalStyle } from "styled-components";
import shadows from "@stylesheets/constants/shadows";
import __reduce from "lodash-es/reduce";

const GlobalShadows = createGlobalStyle((props) => {
  return {
    ":root": __reduce(
      shadows,
      (acc, cv, key) => ({ ...acc, [`--shadow-${key}`]: cv }),
      {}
    ),
  };
});

export default GlobalShadows;
