import type ButtonProps from "@kits/Button/props";
import type { Properties as CSSProperties } from "csstype";
// import type { CSSProperties } from "react";

type PaintParams = Pick<ButtonProps, "variant" | "disabled">;

interface Paints
  extends Pick<
    CSSProperties,
    "color" | "backgroundColor" | "border" | "borderColor" | "background"
  > {
  "&:hover"?: Partial<Omit<Paints, "&:hover">>;
}

type DimensionParams = Pick<
  ButtonProps,
  "block" | "width" | "height" | "fixedWidth"
>;

type Dimensions = Pick<CSSProperties, "minWidth" | "width" | "height">;

export default class ButtonHelper {
  static setPaints({ variant, disabled }: PaintParams): Paints {
    let color = "var(--color-text-primary-main)";
    if (disabled) color = "var(--color-text-tertiary-main)";
    const hoverColor = "var(--color-brand-primary-hover)";

    switch (variant) {
      case "outlined":
        return {
          color,
          backgroundColor: "transparent",
          border: `1px solid ${
            disabled
              ? "var(--color-border-light-main)"
              : "var(--color-brand-primary-main)"
          }`,
          ...(!disabled ? { "&:hover": { borderColor: hoverColor } } : {}),
        };

      case "text":
        return {
          color,
          backgroundColor: "transparent",
          border: "none",
          ...(!disabled ? { "&:hover": { color: hoverColor } } : {}),
        };

      case "contained":
      default:
        return {
          color,
          backgroundColor: disabled
            ? "var(--color-bg-disabled-main)"
            : "var(--color-brand-primary-main)",
          border: "none",
          ...(!disabled ? { "&:hover": { backgroundColor: hoverColor } } : {}),
        };
    }
  }

  static setDimensions({
    block,
    width,
    height = "var(--button-height)",
    fixedWidth,
  }: DimensionParams): Dimensions {
    const minWidth = "120px";
    let _width = width;
    if (block) {
      _width ??= "100%";
    } else if (fixedWidth) {
      _width ??= minWidth;
    }

    // const _height = height || (size === "lg" ? "46px" : size === "md" ? "36px" : "48px");
    return {
      minWidth,
      ...(_width ? { width: _width } : {}),
      height,
    };
  }
}
