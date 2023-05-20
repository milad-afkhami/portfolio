import isClient from "./isClient";

interface GetOptions {
  numeric: boolean;
}

type CSSVariableValue = string | number | null;

type Get = (name: string, options?: GetOptions) => CSSVariableValue;
type Set = (name: string, value: string) => CSSVariableValue;

export default class CSSVariables {
  static get: Get = (name, options = {} as GetOptions) => {
    const { numeric = false } = options || {};
    if (!isClient()) return null;

    let value: string | number = getComputedStyle(
      document.documentElement
    ).getPropertyValue(name);

    if (numeric && value) value = Number(value.replace("px", ""));

    return value;
  };

  static set: Set = (name, value) => {
    if (!isClient()) return null;

    document.documentElement.style.setProperty(name, value);

    return this.get(name);
  };
}
