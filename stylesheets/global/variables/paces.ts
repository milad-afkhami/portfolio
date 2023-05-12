import { createGlobalStyle } from "styled-components";
import paces from "@stylesheets/constants/paces";
import __reduce from "lodash-es/reduce";

const GlobalPaces = createGlobalStyle((props) => {
  return {
    ":root": __reduce(
      paces,
      (acc, cv, key) => ({ ...acc, [`--pace-${key}`]: cv }),
      {}
    ),
  };
});

export default GlobalPaces;
