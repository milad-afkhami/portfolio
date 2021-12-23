import { Colors } from "@stylesheets/themes";

/**
 * helps to set color variable
 * @param color e.g. "bg-primary-light" => var(--color-bg-primary-light)
 */

const colorVar = (color: Colors | string = "") => {
  if (!color) return "";

  const isStaticColor =
    color?.includes?.("rgb") ||
    color?.includes?.("rgba") ||
    color?.includes?.("#");

  return isStaticColor ? color : `var(--color-${color}, ${color})`;
};

export { colorVar as c };
