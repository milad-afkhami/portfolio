import styled from "styled-components";
import { Div } from "./Div/Div";

type Props = {
  type?: "light" | "dark",
  borderStyle?: "dashed" | "dotted" | "double",
  borderWidth?: Number | String,
};

export const HR = styled(Div).attrs(() => ({
  as: "hr",
}))(({ type = "light", borderStyle, borderWidth = 1 }: Props) => ({
  borderColor: `var(--color-border-${type})`,
  borderStyle: borderStyle || "solid",
  borderWidth: borderWidth + "px",
  borderTop: "none",
}));
