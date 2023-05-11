/**
 * helps to set color variable
 * @param {import("@stylesheets").Colors} color e.g. "bg-primary-light" => var(--color-bg-primary-light)
 */

const colorVar = (color) => {
  if (!color) return "";

  const isStaticColor =
    color?.includes?.("rgb") ||
    color?.includes?.("rgba") ||
    color?.includes?.("#");

  // static color names are also supported
  // var(--color-red, red) : there is no --color-red variable so it will pick backup which is second parameter(red)

  return isStaticColor ? color : `var(--color-${color}, ${color})`;
};

export { colorVar as c };
