const bp = {
  xs: 414,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

// Usage in Div kit
// <Div ml="2" sm={{ ml: '0' }} />; for xs margin-left: 2, for sm and greater margin-left: 0;
// <Div sm={{ ml: "2" }} md={{ ml: '0' }} />; for sm margin-left: 2, for sm and greater margin-left: 0;


export const mediaFeatures = {
  xs_only: `(max-width: ${bp.sm - 0.02}px)`,
  sm: `(min-width: ${bp.sm}px)`,
  sm_only: `(min-width: ${bp.sm}px) and (max-width: ${bp.md - 0.02}px)`,
  md: `(min-width: ${bp.md}px)`,
  md_only: `(min-width: ${bp.md}px) and (max-width: ${bp.lg - 0.02}px)`,
  lg: `(min-width: ${bp.lg}px)`,
  lg_only: `(min-width: ${bp.lg}px) and (max-width: ${bp.xl - 0.02}px)`,
  xl: `(min-width: ${bp.xl}px)`,
};

/**
 * @typedef {("xs_only"|"sm"|"sm_only"|"md"|"md_only"|"lg"|"lg_only"|"xl"|"xl_only"|"xxl"|"xxl_only"|"xxxl")} MediaFeatures
 */

export default bp;

