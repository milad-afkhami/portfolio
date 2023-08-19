import {
  Text as StyledText,
  type TextProps as StyledTextProps,
} from "style-wiz";
import { useTranslation } from "next-i18next";
import type { FlatNamespace } from "i18next";
import type { HOCFunctionalComponent } from "@_types/components";

export interface TextProps extends StyledTextProps {
  keyPrefix?: string;
  noTranslation?: boolean;
  ns?: FlatNamespace;
}

const Text: HOCFunctionalComponent<TextProps> = (props) => {
  const { children, ns, noTranslation, keyPrefix, ...rest } = props;

  const [t] = useTranslation(ns, { keyPrefix });

  const isChildrenString = typeof children === "string";

  let text = children;
  // only translate children if it was string and `noTranslation` prop was not provided
  if (isChildrenString && !noTranslation) text = t(children);

  return <StyledText {...rest}>{text}</StyledText>;
};

export default Text;
