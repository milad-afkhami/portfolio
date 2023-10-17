import type { Falsy } from "ts-wiz";

/**
 * {@link https://github.com/JedWatson/classnames/blob/master/index.js | classnames package}
 * @returns joined classnames
 */
export default function classNames(
  ...args: (string | Exclude<Falsy, "">)[]
): string {
  /** joined classnames */
  return args.filter(Boolean).join(" ");
}
