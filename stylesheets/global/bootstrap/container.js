import { createGlobalStyle } from "styled-components";
import { breakpoints } from "@stylesheets";
import { containerStyle } from "@stylesheets/predefined";
import { __reduce } from "@utils";

const containers = {
  xl: "992px",
  lg: "unset",
  md: "unset",
  sm: "unset",
};

// export const GlobalContainerStyle = createGlobalStyle((props) => ({
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

export const GlobalContainerStyle = createGlobalStyle`
  :root {
    --xl-container: ${containers.xl};
    --lg-container: ${containers.lg};
    --md-container: ${containers.md};
    --sm-container: ${containers.sm};
  }
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
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
