import breakpoints from "@constants/stylesheets/breakpoints.json";
import type { CSSAttribute } from "goober";

/**
 * This method helps us in generating responsive stylesheet objects
 * @param breakpoint the lower bound breakpoint,
 * the stylesheets will apply to layouts with a width bigger than this breakpoint value(mobile first)
 * @param styles css stylesheets object
 * @example
 * ```tsx
 * <Div styles={responsiveStyles("md", { display: "flex" })} />
 * ```
 */
const responsiveStyles = (breakpoint: Breakpoints, styles: CSSAttribute) => {
  if (styles) {
    return { [`@media (min-width: ${breakpoints[breakpoint]}px)`]: styles };
  }

  return {};
};

export default responsiveStyles;
