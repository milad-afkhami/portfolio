import { forwardRef } from "react";
import { styled } from "goober";
import fontSizeVar from "@stylesheets/utils/var/fontSize";
import ButtonHelper from "@helpers/button";
import type ButtonProps from "./props";

const BaseButton = styled(
  "button",
  forwardRef
)<ButtonProps>((props) => {
  const { loading = false, disabled = false, variant = "contained" } = props;
  const dimensions = ButtonHelper.setDimensions(props);
  const paints = ButtonHelper.setPaints({ variant, disabled });

  return {
    ...dimensions,
    ...paints,
    "&, & *": { transition: "all 0.1s ease, background 0.8s" },
    "& i": { pointerEvents: "none" },
    backgroundPosition: "center",
    fontSize: fontSizeVar("sm"),
    "& > *:first-child": { transition: "margin-top 0.3s ease" },
    display: "block",
    borderRadius: "var(--button-curve)",
    overflow: "hidden",
    padding: "var(--spacing-1) var(--spacing-4)",
    lineHeight: "normal",
    outline: "none !important",
    cursor: disabled || loading ? "default" : "pointer",
    textAlign: "center",
  };
});

export default BaseButton;
