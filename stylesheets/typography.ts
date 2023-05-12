import { breakpoints } from "@stylesheets";

const typographyVariants = {
  default: {
    "h-xl": { fontSize: 32, fontWeight: "normal" },
    "h-xl-b": { fontSize: 32, fontWeight: "bold" },
    "h-lg": { fontSize: 24, fontWeight: "normal" },
    "h-lg-b": { fontSize: 24, fontWeight: "bold" },
    "h-md": { fontSize: 20, fontWeight: "normal" },
    "h-md-b": { fontSize: 20, fontWeight: "bold" },
    "h-sm": { fontSize: 18, fontWeight: "normal" },
    "h-sm-b": { fontSize: 18, fontWeight: "bold" },
    lg: { fontSize: 16, fontWeight: "normal" },
    "lg-b": { fontSize: 16, fontWeight: "bold" },
    md: { fontSize: 14, fontWeight: "normal" },
    "md-b": { fontSize: 14, fontWeight: "bold" },
    sm: { fontSize: 11, fontWeight: "normal" },
    "sm-b": { fontSize: 11, fontWeight: "bold" },
    xsm: { fontSize: 10, fontWeight: "normal" },
    "xsm-b": { fontSize: 10, fontWeight: "bold" },
    xxsm: { fontSize: 9, fontWeight: "normal" },
    "xxsm-b": { fontSize: 9, fontWeight: "bold" },
  },
  [breakpoints.lg]: {
    "h-xl": { fontSize: 36, fontWeight: "normal" },
    "h-xl-b": { fontSize: 36, fontWeight: "bold" },
    "h-lg": { fontSize: 28, fontWeight: "normal" },
    "h-lg-b": { fontSize: 28, fontWeight: "bold" },
    "h-md": { fontSize: 22, fontWeight: "normal" },
    "h-md-b": { fontSize: 22, fontWeight: "bold" },
    "h-sm": { fontSize: 20, fontWeight: "normal" },
    "h-sm-b": { fontSize: 20, fontWeight: "bold" },
    lg: { fontSize: 18, fontWeight: "normal" },
    "lg-b": { fontSize: 18, fontWeight: "bold" },
    md: { fontSize: 16, fontWeight: "normal" },
    "md-b": { fontSize: 16, fontWeight: "bold" },
    sm: { fontSize: 14, fontWeight: "normal" },
    "sm-b": { fontSize: 14, fontWeight: "bold" },
    xsm: { fontSize: 13, fontWeight: "normal" },
    "xsm-b": { fontSize: 13, fontWeight: "bold" },
    xxsm: { fontSize: 11, fontWeight: "normal" },
    "xxsm-b": { fontSize: 11, fontWeight: "bold" },
  },
};

/**
 * @typedef {("h-lg"|"h-lg-b"|"h-md"|"h-md-b"|"h-sm"|"h-sm-b"|"lg"|"lg-b"|"md"|"md-b"|"sm"|"sm-b"|"xsm"|"xsm-b"|"xxsm"|"xxsm-b"|"xxxsm"|"xxxsm-b")} Typography
 */

export default typographyVariants;
