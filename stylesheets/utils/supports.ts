/**
 * checks if a css property & value is supported by current browser or not.
 * @param {string} property css property
 * @param {string} value css property value
 * @returns "true" if supported, "false" if not.
 */

const supports = (property, value) => {
  if (process.browser) return true;

  var div = document.createElement("div");
  div.style[property] = value;
  return div.style[property] === value; // && CSS.supports(property, value)
};

// todo: implement this with @supports

export default supports;
