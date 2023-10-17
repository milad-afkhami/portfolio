import breakpoints from "@constants/stylesheets/breakpoints.json";
import type { CSSAttribute } from "goober";
import type { Nullishable } from "ts-wiz";

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
const responsiveStyles = (
  breakpoint: Breakpoints,
  styles: Nullishable<CSSAttribute>
) => {
  if (!styles) return {};

  return { [`@media (min-width: ${breakpoints[breakpoint]}px)`]: styles };
};

export default responsiveStyles;
