export const setTextTypography = (size = "md", options) => {
  const importance = options?.important ? " !important" : "";
  const bold = options?.bold;

  const fontSize = `var(--font-size-${size}, ${size})`;

  const fontWeight = bold ? "bold" : `var(--font-weight-${size}, ${size})`;

  return {
    fontSize: fontSize + importance,
    fontWeight: fontWeight + importance,
  };
};
