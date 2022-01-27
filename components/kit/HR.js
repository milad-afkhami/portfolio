import styled from "styled-components";
import { Div } from "./Div/Div";

export const HR = styled(Div).attrs(() => ({
  as: "hr",
}))(
  /**
   *
   * @typedef {("dashed"|"dotted"|"double"|"solid")} BorderStyle
   * @typedef {("dashed"|"dotted"|"double"|"solid")} Type
   *
   * @param {{ type:Type, borderStyle:BorderStyle, borderWidth:number|string }} props
   */
  ({ type = "light", borderStyle = "solid", borderWidth = 1 }) => ({
    borderColor: `var(--color-border-${type})`,
    borderStyle: borderStyle,
    borderWidth: borderWidth + "px",
    borderTop: "none",
  })
);
