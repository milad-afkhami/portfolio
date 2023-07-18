import type { PropsWithChildren } from "react";
import type { DivProps } from "style-wiz";

export interface RowProps extends PropsWithChildren<DivProps> {
  reverse?: boolean;
}

/* eslint-disable  @typescript-eslint/ban-types */
type ColValue = number | (string & {}) | "auto";

export interface ColProps extends DivProps {
  xs: ColValue;
  sm?: ColValue;
  md?: ColValue;
  lg?: ColValue;
  xl?: ColValue;
  responsiveUpperBoundBreakpoint?: ColValue;
}
