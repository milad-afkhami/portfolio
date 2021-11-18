import React from "react";
import styled from "styled-components";
import { Icon } from "@kits/Icon";
import { c, setTextTypography } from "@stylesheets";

export const InputTrailingIcon = styled(Icon)(({ height, size, disabled }) => ({
  position: "absolute",
  fontStyle: "normal",
  width: "20px",
  height,
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  color: c(disabled ? "text-disabled" : "text-secondary"),
  top: "0",
  left: "auto",
  ...setTextTypography(size || "sm-b"),
  backgroundColor: "transparent",
  opacity: "1",
  transition: "color 0.1s",
  right: "0.5rem",
  '[dir="rtl"] &': {
    left: "0.5rem",
  },
  ":hover": {
    color: c(disabled ? "text-disabled" : "text-tertiary"),
  },
}));

export const InputLeadingIcon = styled.i((props) => ({
  width: "20px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  color: c("text-secondary"),
  right: "0",
  top: "0",
  left: "auto",
  ...setTextTypography("sm-b"),
  backgroundColor: "transparent",
  opacity: "1",
}));
