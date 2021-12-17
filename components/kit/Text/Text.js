import React, { ComponentType } from "react";
import styled from "styled-components";
import {
  prepareSpacing,
  getOtherSpacings,
  c,
  setTextTypography,
  paces,
} from "@stylesheets";
import { Trans, withTranslation } from "react-i18next";
// import { Trans, withTranslation } from "node_modules/react-i18next/index";
import { useTranslation } from "@hooks";
import { Props } from "./TextProps";

export const Text: ComponentType<Props> = styled.span.attrs(
  ({ i18n, children, direction, tag, noTranslation, ...rest }) => {
    // const dir = direction || (i18n.language === "fa" ? "rtl" : "ltr");
    const t = useTranslation().t;

    return {
      ...(tag ? { as: tag } : {}),
      children: noTranslation ? children : t(children),
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
    ...setTextTypography(size),
    margin: 0,
    transition: paces.fast,
    ...(bold ? { fontWeight: "bold" } : {}),
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
