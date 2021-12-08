import { HTMLAttributes } from "react";
import { CSSProperties } from "styled-components";
import { Colors } from "@stylesheets/themes";
import { Spacings } from "@stylesheets/constants/spacing";

type CurveTypes = "xlg" | "lg" | "md" | "sm" | "xsm" | "xxsm" | "circle";
type ShadowTypes = "md" | "sm" | true | false;
type PaceTypes = "xFast" | "fast" | "normal" | "slow" | "xSlow";
type Dimensions = {
  top?: String,
  bottom?: String,
  left?: String,
  right?: String,
  insetInlineStart?: String,
  insetInlineEnd?: String,
};
type GridTemplateColumnsValues =
  | "none"
  | "auto"
  | "max-content"
  | "min-content"
  | "length"
  | "initial"
  | "inherit"
  | String;
type GridTemplateRowsValues =
  | "none"
  | "auto"
  | "max-content"
  | "min-content"
  | "length"
  | "initial"
  | "inherit"
  | String;
type FlexAlignValues = "center" | "end" | "start";
type FlexJustifyValues = "center" | "end" | "start" | "around" | "between";
type FlexDirValues = "column" | "row" | "row-reverse" | "column-reverse";
type FlexWrapValues = "wrap" | "no-wrap";

type FlexProps = [
  FlexAlignValues,
  FlexJustifyValues,
  FlexDirValues,
  FlexWrapValues
];

type GridProps = [
  GridTemplateColumnsValues,
  GridTemplateRowsValues,
  Spacings | String | Number,
  Spacings | String | Number,
  "row" | "column" | "dense" | "row dense" | "column dense",
  FlexAlignValues,
  FlexJustifyValues
];

interface Animation {
  keyframes: {
    from?: CSSProperties,
    to?: CSSProperties,
    [key: string | number]: CSSProperties,
  };
  duration: String;
  iterationCount: "infinite" | "initial" | "inherit" | String | Number;
  direction: "normal" | "reverse" | "alternate" | "alternate-reverse";
  timingFunction:
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "step-start"
    | "step-end"
    | "steps(int,start|end)"
    | "initial"
    | "inherit"
    | "cubic-bezier(n,n,n,n)"
    | String; // https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp
  fillMode:
    | "none"
    | "forwards"
    | "backwards"
    | "both"
    | "initial"
    | "inherit"
    | String;
  playState: "paused" | "running" | "initial" | "inherit";
}

type BorderSide =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "inlineStart"
  | "inlineEnd";

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
  matchParent?: Boolean;
  curve?: CurveTypes;
  shadow?: ShadowTypes;
  pace?: PaceTypes;
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
  flexPortion?: String | Number;
  display?: String;
  col?: { xs: Number, sm: Number, md: Number, lg: Number, xl: Number };
  overflow?: "hidden" | "scroll" | "auto" | "visible";
  overflowX?: "hidden" | "scroll" | "auto" | "visible";
  overflowY?: "hidden" | "scroll" | "auto" | "visible";
  cursor?:
    | "pointer"
    | "copy"
    | "grab"
    | "grabbing"
    | "no-drop"
    | "none"
    | "not-allowed"
    | "zoom-in"
    | "default";
  position?: "absolute" | "fixed" | "relative" | "sticky" | "unset";
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
