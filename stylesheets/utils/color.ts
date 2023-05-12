import Color  from "@models/Color";

// const types = ["", "-hover", "-light", "-lighter", "-dark", "-pale", "-paler", "-variant"];
const types = Object.keys(new Color()).map((type) =>
  type === "main" ? "" : `-${type}`
);

/**
 * creates css variables from different types of a single color
 * @example ...color("NAME", "HOVER", "LIGHT", "LIGHTER", "DARK", "PALE", "VARIANT")
 **/
 const color=(name, ...colors)=> {
  return (colors || []).reduce((acc, cv, i) => {
    if (cv) acc[`--${name + types[i]}`] = cv;
    return acc;
  }, {});
}

            export default color