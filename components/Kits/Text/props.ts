import type { TextProps as StyledTextProps } from "style-wiz";

export default interface TextProps extends StyledTextProps {
  keyPrefix?: string;
  noTranslation?: boolean;
  ns?: I18NNameSpaces;
}
