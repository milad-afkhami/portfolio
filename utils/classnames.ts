/**
 * {@link https://github.com/JedWatson/classnames/blob/master/index.js | classnames package}
 * @returns joined classnames
 */
export default function classNames(...args: Array<string | Falsy>): string {
  /** joined classnames */
  return args.filter(Boolean).join(" ");
}
