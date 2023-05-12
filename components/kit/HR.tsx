import styled from "styled-components";
import { Div } from "./Div";

/**
 *
 * @typedef {("dashed"|"dotted"|"double"|"solid")} BorderStyle
 * @typedef {("dashed"|"dotted"|"double"|"solid")} Type
 * @typedef {{ type:Type, borderStyle:BorderStyle, borderWidth:number|string }} HRProps
 *
 *
 * @type {import("react").ComponentType<HRProps>}
 */

const HR = styled(Div).attrs(() => ({
  as: "hr",
}))(({ type = "light", borderStyle = "solid", borderWidth = 1 }) => ({
  borderColor: `var(--color-border-${type})`,
  borderStyle: borderStyle,
  borderWidth: borderWidth + "px",
  borderTop: "none",
}));


            
                
            
            
            
            export default HR;