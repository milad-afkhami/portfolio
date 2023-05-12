

const setTextTypography = (size, options) => {
  const importance = options?.important ? " !important" : "";
  const bold = options?.bold;

  // existence of a "." in variable name will mark value as "invalid" and second parameter of var function(fallback value) won't work
  // so for values like "2.5rem" or ..., we have to remove it in first param
  // it will not have any effect on standard typography keys(xs, sm, ...)
  // p.s. String.prototype.replaceAll didn't work properly on ssr so I used replace method with regExp instead

  const fontSize = `var(--font-size-${size?.replace?.(/\./g, "")}, ${size})`;

  const fontWeight = bold ? "bold" : `var(--font-weight-${size}, ${size})`;

  return size
    ? { fontSize: fontSize + importance, fontWeight: fontWeight + importance }
    : {};
};

            export default setTextTypography;