const types = [
  "",
  "-hover",
  "-light",
  "-lighter",
  "-dark",
  "-pale",
  "-paler",
  "-variant",
];
/**
 * creates css variables from different types of a single color
 * @example ...color("NAME", "HOVER", "LIGHT", "LIGHTER", "DARK", "PALE", "VARIANT")
 * */
export function color(name, ...colors) {
  return (colors || []).reduce((acc, cv, i) => {
    if (cv) acc[`--${name + types[i]}`] = cv;
    return acc;
  }, {});
}
