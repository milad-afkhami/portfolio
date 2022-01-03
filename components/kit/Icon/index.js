import React, { ComponentType } from "react";
import styled from "styled-components";
import { c, setTextTypography } from "@stylesheets";
import { IconProps, IconName } from "./types";

export const Icon: ComponentType<IconProps> = styled.i.attrs(
  ({
    prefix = "mili",
    suffix = "icon",
    name,
    multiDirection,
    className = "",
  }) => {
    const _prefix = prefix ? `${prefix}-` : "";
    const _suffix = suffix ? `-${suffix}` : "";
    const _name = `${_prefix}${name}${_suffix}`;
    const dirCN = multiDirection ? "icon-dir" : "";
    return { className: `${_name} ${dirCN} ${className}` };
  }
)(
  ({
    size = "lg",
    bold,
    cursor = "pointer",
    color,
    hoverColor = "text-secondary",
  }) => ({
    ...setTextTypography(size, { bold }),
    cursor: cursor || "pointer",
    transition: `all var(--pace-x-fast)`,
    ...(color ? { color: c(color) } : {}),
    ...(hoverColor ? { ":hover": { color: c(hoverColor) } } : {}),
  })
);
