import type { TextProps as StyledTextProps } from "style-wiz";
import type { FlatNamespace } from "i18next";

export default interface TextProps extends StyledTextProps {
  keyPrefix?: string;
  noTranslation?: boolean;
  ns?: FlatNamespace;
}
