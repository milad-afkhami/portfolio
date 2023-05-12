import { createGlobalStyle } from "styled-components";
import curves from "@stylesheets/constants/curves";
import __reduce from "lodash-es/reduce";

const GlobalCurves = createGlobalStyle((props) => {
  return {
    ":root": __reduce(
      curves,
      (acc, cv, key) => ({ ...acc, [`--curve-${key}`]: cv }),
      {}
    ),
  };
});

export default GlobalCurves;
