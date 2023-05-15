import type { HTMLAttributes, PropsWithChildren } from "react";
import type { TOptions } from "i18next";
import type { CSSAttribute } from "goober";

export interface StyledTextProps extends HTMLAttributes<Element> {
  // as?: Parameters<typeof styled>[0];
  as?: keyof JSX.IntrinsicElements;
  size?: Typography | CSSAttribute["fontSize"];
  color?: Colors;
  hoverColor?: Colors;
  maxLines?: number;
  bold?: boolean;
  truncate?: boolean;
  lineHeight?: string | number;
  userSelect?: CSSAttribute["userSelect"];
  align?: CSSAttribute["textAlign"];
  css?: CSSAttribute;
}

export default interface TextProps extends PropsWithChildren, StyledTextProps {
  keyPrefix?: string;
  translationOptions?: TOptions;
  noTranslation?: boolean;
  ns?: I18NNameSpaces;
}
