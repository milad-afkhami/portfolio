import spacings from "@stylesheets/constants/spacing";
import __reduce from "lodash-es/reduce";

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

const prepareDimensions = (d = []) =>
  __reduce(
    d,
    (result, v, k) => {
      const value = spacings[v] || v;
      result[k] = value;
      return result;
    },
    {}
  );

export default prepareDimensions;
