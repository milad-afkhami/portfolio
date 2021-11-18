import { STATIC } from "@constants";
import { imp } from "@stylesheets";
import { Colors } from "@stylesheets/themes";
import { noop } from "@utils";

/**
 * helps to set color variable
 * @param color e.g. "bg-primary-light" => var(--color-bg-primary-light)
 */

const colorVar = (color: Colors = "", important) =>
  color.includes(STATIC) // || new RegExp("#|rgba|rgb|hsl").test(color)
    ? color.slice(STATIC.length + 1, -1)
    : (important ? imp : noop)(`var(--color-${color})`);

// const colorVar = (color: Colors = "", prefix) => color.includes(STATIC) ? color.slice(STATIC.length + 1, -1) : `var(--color-${color.unImp()})`.imp(color.includes("".imp()));

export { colorVar as c };
