import { HTMLAttributes } from "react";
import { CSSProperties } from "styled-components";
import { Colors } from "@stylesheets/themes";
// import { Spacings } from "@stylesheets/constants/spacing";

// imports
/**
 * @typedef {import('@stylesheets/constants/spacing').Spacings|number} Spacings
 */

/**
 * @typedef {("xlg" | "lg" | "md" | "sm" | "xsm" | "xxsm" | "circle")} Curves
 * @typedef {("md" | "sm" | true | false)} Shadows
 * @typedef {("xFast" | "fast" | "normal" | "slow" | "xSlow")} Paces
 * @typedef {("left"|"right"|"top"|"bottom"|"inlineStart"|"inlineEnd")} BorderSide
 * @typedef {("pointer"|"copy"|"grab"|"grabbing"|"no-drop"|"none"|"not-allowed"|"zoom-in"|"default")} CursorValues
 * @typedef {("hidden" | "scroll" | "auto" | "visible")} OverflowValues
 * @typedef {("absolute"|"fixed"|"relative"|"sticky"|"unset")} PositionValues
 * @typedef {{top:string|number, bottom:string|number, left:string|number, right:string|number, insetInlineStart:string|number, insetInlineEnd:string|number }} Dimensions
 */

// Flex/Grid
/**
 * @typedef {("none"|"auto"|"max-content"|"min-content"|"length"|"initial"|"inherit")} GridTemplateColumnsValues
 * @typedef {("none"|"auto"|"max-content"|"min-content"|"length"|"initial"|"inherit")} GridTemplateRowsValues
 * @typedef {("center"|"end"|"start")} FlexAlignValues
 * @typedef {("center" | "end" | "start" | "around" | "between")} FlexJustifyValues
 * @typedef {("column" | "row" | "row-reverse" | "column-reverse")} FlexDirValues
 * @typedef {("wrap" | "no-wrap")} FlexWrapValues
 * @typedef {("row" | "column" | "dense" | "row dense" | "column dense")} GridAutoFlowValues
 *
 * @typedef {[FlexAlignValues,FlexJustifyValues,FlexDirValues,FlexWrapValues]} FlexProps
 *
 * @typedef {[GridTemplateColumnsValues,GridTemplateRowsValues,Spacings,Spacings,GridAutoFlowValues,FlexAlignValues,FlexJustifyValues]} GridProps
 *
 * @typedef {{ xs:number, sm:number, md:number, lg:number, xl:number }} ColValues
 */

// animation
/**
 * @typedef {{ from: CSSProperties, to: CSSProperties, [key: string]: CSSProperties }} KeyframeValues
 * @typedef {("infinite"|"initial"|"inherit"|number)} IterationCountValues
 * @typedef {("normal"|"reverse"|"alternate"|"alternate-reverse")} AnimationDirectionValues
 * @typedef {("linear"|"ease"|"ease-in"|"ease-out"|"ease-in-out"|"step-start"|"step-end"|"steps(int,start|end)"|"initial"|"inherit"|"cubic-bezier(n,n,n,n)")} TimingFunctionValues
 * @typedef {("none"|"forwards"|"backwards"|"both"|"initial"|"inherit")} FillModeValues
 * @typedef {("paused"|"running"|"initial"|"inherit")} PlayStateValues
 *
 * @typedef {{keyframes:KeyframeValues, duration:string, iterationCount:IterationCountValues, direction:AnimationDirectionValues, timingFunction:TimingFunctionValues, fillMode:FillModeValues, playState:PlayStateValues }} Animation
 */

// just for intellisense
export interface Props extends HTMLAttributes {
  as?: String;
  container?: Boolean;
  dir?: "ltr" | "rtl";
  row?: Boolean;
  width?: String;
  mw?: String;
  Mw?: String;
  height?: String;
  mh?: String;
  Mh?: String;
  hiddenScrollbar?: Boolean;
  thinScrollbar?: Boolean;
  matchParent?: Boolean;
  curve?: Curves;
  shadow?: Shadows;
  pace?: Paces;
  border?: Colors | String;
  borderSide?: BorderSide;
  borderW?: String;
  bg?: Colors;
  bgImage?: String;
  color?: Colors;
  opacity?: Number | String;
  hoverBg?: Colors;
  hoverColor?: Colors;
  hoverShadow?: String;
  m?: String | Array;
  mStart?: String;
  mEnd?: String;
  mx?: String;
  my?: String;
  mt?: String;
  mb?: String;
  p?: String | Array;
  pStart?: String;
  pEnd?: String;
  px?: String;
  py?: String;
  pt?: String;
  pb?: String;
  flex?: FlexProps | Boolean;
  flexPortion?: "auto" | String | Number;
  display?: String;
  col?: ColValues;
  overflow?: OverflowValues;
  overflowX?: OverflowValues;
  overflowY?: OverflowValues;
  cursor?: CursorValues;
  position?: PositionValues;
  dimensions?: Dimensions;
  zIndex?: String;
  order?: Number | String;
  /**
   * @param {string} 0: css "grid-template-columns" property
   * @param {string} 1: css "grid-template-rows" property
   * @param {string} 2: css "column-gap" property
   * @param {string} 3: css "row-gap" property
   * @param {string} 4: css "grid-auto-flow" property
   * @param {string} 5: css "align-content" property
   * @param {string} 6: css "justify-content" property
   */
  grid?: GridProps;
  after?: Props;
  before?: Props;
  hover?: Props;
  zoomOnHover?: Boolean;
  responsive?: {
    xs_only?: Props,
    sm?: Props,
    sm_only?: Props,
    md?: Props,
    md_only?: Props,
    lg?: Props,
    lg_only?: Props,
    xl?: Props,
    xl_only?: Props,
    xxl?: Props,
    xxl_only?: Props,
    xxxl?: Props,
  };
  css?: CSSProperties;
  animation?: Animation;
  blurBg?: Boolean;
  truncate?: Boolean;
}
