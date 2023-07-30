/**
 * {@link https://github.com/JedWatson/classnames/blob/master/index.js | classnames package}
 * @returns joined classnames
 */
export default function classNames(
  ...args: (string | Nullish | false)[]
): string {
  /** joined classnames */
  return args.filter(Boolean).join(" ");
}
