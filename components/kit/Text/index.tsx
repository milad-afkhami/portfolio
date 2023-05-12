import styled from "styled-components";
import {
  prepareSpacing,
  getOtherSpacings,
  c,
  setTextTypography,
  paces,
} from "@stylesheets";
import useTranslation from "@hooks/useTranslation";

/**
 * @typedef {{ children:any, tag:string, size:import("@stylesheets").Typography, direction:string, translationOptions:Object, translationVariables:Object, noTranslation:boolean, lineHeight:string|number, align:"start"|"end"|"left"|"right"|"center"|"justify"|"initial"|"inherit" }} TextProps
 * @typedef { import('@kits/Div/Props').Props & TextProps } Props
 *
 * @component - Renders a text component with default span element enhanced with needed styles and functionalities
 * @type {import("react").ComponentType<Props>}
 */

const Text = styled.span.attrs(
  ({
    translationOptions = {},
    translationVariables = {},
    children,
    direction,
    tag,
    noTranslation,
    ...rest
  }) => {
    // const dir = direction || (i18n.language === "fa" ? "rtl" : "ltr");
    const t = useTranslation().t;
    return {
      ...(tag ? { as: tag } : {}),
      children:
        noTranslation || typeof children !== "string"
          ? children
          : t(children, {
              ...translationOptions,
              ...translationVariables,
            }),
      ...rest,
    };
  }
)(
  ({
    color,
    size,
    bold,
    m,
    p,
    css,
    truncate,
    width,
    mw,
    Mw,
    height,
    mh,
    Mh,
    align,
    hoverColor,
    zoomOnHover,
    lineHeight,
    ...restProps
  }) => ({
    ...(color ? { color: c(color) } : {}),
    ...setTextTypography(size, { bold }),
    margin: 0,
    transition: paces.fast,
    ...(m && m.length ? { margin: prepareSpacing(Array.from(m)) } : {}),
    ...(p && p.length ? { padding: prepareSpacing(Array.from(p)) } : {}),
    ...getOtherSpacings(restProps),
    ...(width ? { width } : {}),
    ...(mw ? { minWidth: mw } : {}),
    ...(Mw ? { maxWidth: Mw } : {}),
    ...(height ? { height } : {}),
    ...(mh ? { minHeight: mh } : {}),
    ...(Mh ? { maxHeight: Mh } : {}),
    ...(align ? { textAlign: align } : {}),
    ...(lineHeight ? { lineHeight } : {}),
    ...(css || {}),
    ...(truncate
      ? { textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }
      : {}),
    ...(hoverColor
      ? {
          ":hover": {
            ...(hoverColor ? { color: c(hoverColor) } : {}),
            ...(zoomOnHover ? { transform: "scale(1.05)" } : {}),
          },
        }
      : {}),
    "-moz-font-feature-settings": '"ss02"',
    "-webkit-font-feature-settings": '"ss02"',
    "font-feature-settings": '"ss02"',
  })
);

export default Text;
