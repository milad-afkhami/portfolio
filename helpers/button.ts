import colorVar from "@stylesheets/utils/var/color";
import type ButtonProps from "@kits/Button/props";
import type { Properties as CSSProperties } from "csstype";
// import type { CSSProperties } from "react";

type PaintParams = Pick<
  ButtonProps,
  "variant" | "disabled" | "loading" | "color" | "bordered"
>;

type Paints = Pick<
  CSSProperties,
  "color" | "backgroundColor" | "border" | "background"
> & {
  "&:hover"?: Partial<Omit<Paints, "&:hover">>;
};

type DimensionParams = Pick<
  ButtonProps,
  "block" | "width" | "height" | "fixedWidth"
>;

type Dimensions = Pick<CSSProperties, "minWidth" | "width" | "height">;

export default class ButtonHelper {
  static setPaints({
    variant,
    disabled,
    loading,
    color,
    bordered,
  }: PaintParams): Paints {
    // eslint-disable-next-line one-var
    let hoverColor, bgColor;
    switch (variant) {
      case "outlined":
        hoverColor = colorVar(`${color}-paler`);
        return {
          color: colorVar(disabled ? "text-disabled-main" : `${color}-main`),
          backgroundColor: "var(--color-bg-primary-main)",
          border: bordered
            ? `1px solid ${colorVar(
                disabled ? "text-disabled-main" : `${color}-main`
              )}`
            : "none",
          ...(!disabled && !loading
            ? {
                "&:hover": {
                  background: ButtonHelper.#getHoverBg(hoverColor),
                },
                "&:active": {
                  backgroundColor: colorVar(`${color}-light`),
                  backgroundSize: "100%",
                  transition: "background 0s",
                },
              }
            : {}),
        };
      case "text":
        hoverColor = colorVar(`${color}-paler`);
        return {
          color: disabled
            ? "var(--color-text-disabled-main)"
            : "var(--color-brand-main)",
          backgroundColor: "var(--color-bg-primary-main)",
          border: "none",
          ...(!disabled && !loading
            ? {
                "&:hover": {
                  color: "var(--color-brand-hover)",
                  background: ButtonHelper.#getHoverBg(hoverColor),
                },
                "&:active": {
                  backgroundColor: colorVar(`${color}-light`),
                  backgroundSize: "100%",
                  transition: "background 0s",
                },
              }
            : {}),
        };

      case "contained":
      default:
        if (bordered) hoverColor = colorVar(`${color}-hover`);
        bgColor = disabled ? "bg-disabled-main" : `${color}-main`;
        if (!bordered) bgColor = `${color}-pale`;
        return {
          color: disabled
            ? "var(--color-text-disabled-main)"
            : "var(--color-bg-primary-main)",
          backgroundColor: colorVar(bgColor),
          border: "none",
          ...(!disabled && !loading
            ? {
                "&:hover": {
                  ...(hoverColor && {
                    background: ButtonHelper.#getHoverBg(hoverColor),
                  }),
                },
                "&:active": {
                  backgroundColor: colorVar(`${color}-light`),
                  backgroundSize: "100%",
                  transition: "background 0s",
                },
              }
            : {}),
        };
    }
  }

  static setDimensions({
    block,
    width,
    height = "var(--button-height)",
    fixedWidth,
  }: DimensionParams): Dimensions {
    const minWidth = "50px";
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

  static #getHoverBg(hoverColor: string) {
    return `${hoverColor} radial-gradient(circle, transparent 1%, ${hoverColor} 1%) center/15000%`;
  }
}
