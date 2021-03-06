export class CSSVariables {
  /**
   * @param {string} name
   * @param {{numeric:boolean, rgb:boolean}} options
   * @returns {string|number}
   */
  static get = (name, options) => {
    const { numeric = false, rgb = false } = options || {};
    if (!process.browser) return null;

    let value = getComputedStyle(document.documentElement).getPropertyValue(
      name
    );

    if (numeric && value) value = Number(value.replace("px", ""));

    return value;
  };

  static set = ({ name, value }) => {
    if (!process.browser) return null;

    document.documentElement.style.setProperty(name, value);

    return this.get(name);
  };
}
