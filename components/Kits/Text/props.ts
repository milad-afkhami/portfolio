import type { HTMLAttributes } from "react";
import type { CSSAttribute } from "goober";
// import type { KeyPrefix } from "i18next";
// import type { UseTranslationOptions } from "react-i18next";

export interface StyledTextProps extends HTMLAttributes<Element> {
  // as?: Parameters<typeof styled>[0];
  as?: keyof JSX.IntrinsicElements;
  size?: Typography | CSSAttribute["fontSize"];
  color?: Colors;
  hoverColor?: Colors;
  maxLines?: number;
  bold?: boolean;
  truncate?: boolean;
  lineHeight?: CSSAttribute["lineHeight"];
  transform?: CSSAttribute["textTransform"];
  userSelect?: CSSAttribute["userSelect"];
  align?: CSSAttribute["textAlign"];
  css?: CSSAttribute;
}

export default interface TextProps extends StyledTextProps {
  keyPrefix?: string;
  noTranslation?: boolean;
  ns?: I18NNameSpaces;
}
