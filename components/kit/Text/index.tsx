import { forwardRef, type FC } from "react";
import { styled, type CSSAttribute } from "goober";
import useTranslation from "@hooks/useTranslation";
import colorVar from "@stylesheets/utils/var/color";
import fontSizeVar from "@stylesheets/utils/var/fontSize";
import { isDevelopment } from "@configs/general";
import type TextProps from "./props";
import type { StyledTextProps } from "./props";

const truncateStyles: Partial<CSSAttribute> = {
  maxWidth: "100%",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
};

const maxLinesStyles = (
  count: TextProps["maxLines"]
): Partial<CSSAttribute> => ({
  textOverflow: "ellipsis",
  overflow: "hidden",
  lineClamp: count,
  WebkitLineClamp: count,
  boxOrient: "vertical",
  WebkitBoxOrient: "vertical",
  display: "-webkit-box",
});

/** Adds stylistic sets of 1 to font feature settings for adding persian numerals */
const fontFeaturesSettings = {
  "-moz-font-feature-settings": '"ss01"',
  "-webkit-font-feature-settings": '"ss01"',
  "font-feature-settings": '"ss01"',
};

const StyledText = styled(
  "span",
  forwardRef
)<StyledTextProps>(
  ({
    size,
    color,
    hoverColor,
    bold,
    truncate,
    align,
    lineHeight,
    userSelect,
    maxLines,
    css,
  }) => ({
    ...(color ? { color: colorVar(color) } : {}),
    ...(size ? { fontSize: fontSizeVar(size) } : {}),
    fontWeight: bold ? "bold" : "normal",
    margin: 0,
    transition: "var(--pace-fast)",
    ...(align ? { textAlign: align } : {}),
    ...(lineHeight ? { lineHeight } : {}),
    ...(userSelect ? { userSelect } : {}),
    ...(truncate ? truncateStyles : {}),
    ...(maxLines ? maxLinesStyles(maxLines) : {}),
    ...(hoverColor ? { "&:hover": { color: colorVar(hoverColor) } } : {}),
    ...fontFeaturesSettings,
    ...(css || {}),
  })
);

const Text: FC<TextProps> = (props) => {
  const { children, ns, translationOptions, noTranslation, keyPrefix } = props;

  const { t } = useTranslation(ns, { keyPrefix });

  const isChildrenString = typeof children === "string";
  if (isDevelopment && !noTranslation && !isChildrenString) {
    throw new Error("only string children is accepted for translation");
  }

  let text = children;
  // only translate children if it was string and `noTranslation` prop was not provided
  if (isChildrenString && !noTranslation)
    text = t(children, translationOptions);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledText {...props}>{text}</StyledText>;
};

export default Text;
// export default withTranslation()(Text);
