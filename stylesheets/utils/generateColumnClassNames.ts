/* eslint-disable no-param-reassign */
import __reduce from "lodash-es/reduce";
import type { ColProps } from "@kits/Grid/props";

/**
 * @example
 * generateColumnClassNames({ xs: 12, md: 6 });
 * // => col-12 col-md-6
 */
export default function generateColumnClassNames(
  col: Pick<ColProps, "xs" | "sm" | "md" | "lg" | "xl">
) {
  return __reduce(
    col || {},
    (acc, cv, key) => {
      if (cv) {
        if (key === "xs") acc += `col-${cv}`;
        else acc += ` col-${key}-${cv}`;
      }
      return acc;
    },
    ""
  );
}
