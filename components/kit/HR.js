import styled from "styled-components";
import { c } from "@stylesheets";
import { Div } from "./Div/Div";

type Props = {
  type?: "light" | "dark",
  borderStyle?: "dashed" | "dotted" | "double",
  borderWidth?: Number | String,
};

export const HR = styled(Div).attrs(() => ({
  as: "hr",
}))(({ type, borderStyle, borderWidth = 1 }: Props) => ({
  borderColor: c(`border-${type || "light"}`),
  borderStyle: borderStyle || "solid",
  borderWidth: borderWidth + "px",
  borderTop: "none",
}));
