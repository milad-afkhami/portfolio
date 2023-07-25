type Breakpoints = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

declare module "@constants/stylesheets/breakpoints.json" {
  type BreakpointsConstants = {
    [key in Breakpoints]: number;
  };
  const breakpoints: BreakpointsConstants;
  export default breakpoints;
}
