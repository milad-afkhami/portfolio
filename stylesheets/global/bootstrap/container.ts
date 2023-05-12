import { createGlobalStyle } from "styled-components";
import breakpoints from "@stylesheets/breakpoints";
import __reduce from "lodash-es/reduce";

const containers = {
  xl: "1200px",
  lg: "unset",
  md: "unset",
  sm: "unset",
};

// const GlobalContainerStyle = createGlobalStyle((props) => ({
//   ...__reduce(
//     containers,
//     (acc, cv, bp) => {
//       acc[":root"][`--${bp}-container`] = cv;
//       acc[`@media (min-width: ${breakpoints[bp]}px)`] = {
//         container: { "max-width": `var(--${bp}-container)` },
//       };
//       return acc;
//     },
//     { ":root": {}, ".container": containerStyle }
//   ),
// }));

const GlobalContainerStyle = createGlobalStyle`
  :root {
    --xl-container: ${containers.xl};
    --lg-container: ${containers.lg};
    --md-container: ${containers.md};
    --sm-container: ${containers.sm};
  }
  .container {
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: ${breakpoints.sm}px) {
    .container {
      max-width: var(--sm-container);
    }
  }
  @media (min-width: ${breakpoints.md}px) {
    .container {
      max-width: var(--md-container);
    }
  }
  @media (min-width: ${breakpoints.lg}px) {
    .container {
      max-width: var(--lg-container);
    }
  }
  @media (min-width: ${breakpoints.xl}px) {
    .container {
      max-width: var(--xl-container);
    }
  }
`;

export default GlobalContainerStyle;
