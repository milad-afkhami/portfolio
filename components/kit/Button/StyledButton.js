import React from "react";
import styled from "styled-components";
import { setDimensions } from "./setDimensions";
import { setStyle } from "./setStyle";
import { c, curves, setTextTypography, typography } from "@stylesheets";
import { Div } from "@kits";

const StyledButton = styled(Div).attrs((attrs) => ({ as: "button" }))(
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
        transition: "all 0.1s ease, background-color 0.3s",
      },
      [firstChild]: { transition: "margin-top 0.3s ease" },
      display: "block",
      borderRadius: 0,
      overflow: "hidden",
      ":focus": { outline: "none" },
      // color: c("text-primary"),
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

export { StyledButton };
