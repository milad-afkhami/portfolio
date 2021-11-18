import { typographyVariants } from "@stylesheets";

export const setTextTypography = (size = "md", options) => {
  const importance = options?.important ? " !important" : "";
  const bold = options?.bold;
  const isValidTypography = !!typographyVariants.default[size];

  const fontSize = isValidTypography
    ? `var(--font-size-${size})`
    : `${`${size || ""}`.replace("px", "")}px`;

  const fontWeight = bold
    ? "bold"
    : isValidTypography
    ? `var(--font-weight-${size})`
    : "";

  return {
    fontSize: fontSize + importance,
    fontWeight: fontWeight + importance,
  };
};
