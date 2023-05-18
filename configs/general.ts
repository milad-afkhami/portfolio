import breakpoints from "@stylesheets/constants/breakpoints.json";

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";

/** The breakpoint that we will consider everything below it as responsive */
const responsiveUpperBoundBreakpoint = "md";
const responsiveUpperBoundBreakpointValue = `${breakpoints[responsiveUpperBoundBreakpoint]}px`;

const tagManagerId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export {
  isDevelopment,
  isProduction,
  responsiveUpperBoundBreakpoint,
  responsiveUpperBoundBreakpointValue,
  tagManagerId,
};
