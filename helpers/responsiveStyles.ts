import breakpoints from "@constants/stylesheets/breakpoints.json";
import type { CSSAttribute } from "goober";

const responsiveStyles = (breakpoint: Breakpoints, styles: CSSAttribute) =>
  styles
    ? { [`@media (min-width: ${breakpoints[breakpoint]}px)`]: styles }
    : {};

export default responsiveStyles;
