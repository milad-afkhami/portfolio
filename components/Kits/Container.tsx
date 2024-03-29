// #region imports
import { styled } from "goober";
import breakpoints from "@constants/stylesheets/breakpoints.json";
// #endregion

const containers = {
  xl: "1232px",
  lg: "unset",
  md: "unset",
  sm: "unset",
};

const Container = styled("div")`
  width: 100%;
  padding-right: var(--spacing-4);
  padding-left: var(--spacing-4);
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${breakpoints.sm}px) {
    max-width: ${containers.sm};
  }
  @media (min-width: ${breakpoints.md}px) {
    max-width: ${containers.md};
  }
  @media (min-width: ${breakpoints.lg}px) {
    max-width: ${containers.lg};
  }
  @media (min-width: ${breakpoints.xl}px) {
    max-width: ${containers.xl};
  }
`;

export default Container;
