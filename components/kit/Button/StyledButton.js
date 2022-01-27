import React from "react";
import styled from "styled-components";
import { setDimensions } from "./setDimensions";
import { setStyle } from "./setStyle";
import { curves, setTextTypography } from "@stylesheets";
import { Div } from "@kits";

export const StyledButton = styled(Div).attrs((attrs) => ({ as: "button" }))(
  ({
    text,
    loading,
    success,
    size,
    disabled,
    variant,
    css,
    block,
    width,
    height,
    ...rest
  }) => {
    const dimensions = setDimensions({ size, block, width, height });
    const firstChild = "& > *:first-child";
    return {
      ...dimensions,
      ...setStyle({ variant, disabled }),
      "&, & *": {
        ...setTextTypography("md"),
        transition: "all 0.1s ease, background-color 1s",
      },
      [firstChild]: { transition: "margin-top 0.3s ease" },
      display: "block",
      borderRadius: curves.xlg,
      overflow: "hidden",
      ":focus": { outline: "none" },
      // color: "var(--color-text-primary)",
      ...(loading
        ? { [firstChild]: { marginTop: `-${dimensions.height}` } }
        : success
        ? {
            [firstChild]: {
              marginTop: `-${2 * dimensions.height.replace("px", "")}px`,
            },
          }
        : {}),
    };
  }
);
