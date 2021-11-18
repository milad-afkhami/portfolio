import { spacings } from "@stylesheets";
import { __reduce } from "@utils";

const getDimensionKey = (key, value) => {
  const insetInlineStart = key === "insetInlineStart";
  const insetInlineEnd = key === "insetInlineEnd";

  if (
    !process.browser ||
    (!insetInlineStart && !insetInlineStart) ||
    CSS.supports(
      insetInlineStart
        ? "inset-inline-start"
        : insetInlineEnd
        ? "inset-inline-end"
        : "",
      value
    )
  )
    return key;

  const dir = document.documentElement.dir;
  const fallback = {
    insetInlineStart: dir === "ltr" ? "right" : "left",
    insetInlineEnd: dir === "ltr" ? "left" : "right",
  };
  return fallback[key];
};

export const prepareDimensions = (d = []) =>
  __reduce(
    d,
    (result, v, k) => {
      const value = spacings[v] || v;
      result[k] = value;
      return result;
    },
    {}
  );
