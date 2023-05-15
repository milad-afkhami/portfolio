import { type LinkProps as NextLinkProps } from "next/link";
import type DivProps from "@kits/Div/props";

type NextLinkOmittedProps = "as" | "onClick" | "onMouseEnter" | "onTouchStart";

export default interface LinkProps
  extends DivProps,
    Omit<NextLinkProps, NextLinkOmittedProps> {
  outerLink?: boolean;
  underline?: boolean;
  disabled?: boolean;
}
