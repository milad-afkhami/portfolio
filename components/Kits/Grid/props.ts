import type { PropsWithChildren } from "react";
import type { DivProps } from "style-wiz";

export interface RowProps extends PropsWithChildren<DivProps> {
  reverse?: boolean;
}

/* eslint-disable  @typescript-eslint/ban-types */
export type ColValue = number | (string & {}) | "auto";
// export type ColValue = IntRange<1, 13> | (string & {}) | "auto";

export type ColProps = Partial<
  Record<Breakpoints | "responsiveUpperBoundBreakpoint", ColValue>
>;
