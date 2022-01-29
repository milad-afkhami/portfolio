import React from "react";
import styled from "styled-components";
import { c, setTextTypography } from "@stylesheets";

/**
 * @typedef {("stop-watch-filled"|"stop-watch-outline"|"moon-2"|"ruler-2"|"measure-2"|"math"|"gallery"|"gallery-2"|"gallery-3"|"tools"|"measure"|"gallery-4"|"linkedin-outline"|"moon"|"hash"|"nested-list"|"copy-fill"|"clock"|"time"|"history"|"list"|"star"|"info"|"skype-fill"|"sun1"|"list-2"|"copy-fill"|"clock"|"time"|"history"|"list"|"star"|"info"|"skype-fill"|"sun1"|"list-2"|"chevron-circle-right"|"chevron-circle-right"|"chevron-right"|"bullseye"|"eye-dropper"|"chevron-right-2"|"skype-outline"|"sun"|"double-chevrons-right"|"chevron-right-3"|"copy-outline"|"mail"|"nested-tree"|"focus-center-2"|"focus-center-3"|"timeline"|"whatsapp"|"telegram"|"skype"|"linkedin"|"gmail")} IconName
 * @typedef {{name:IconName, color:import("@stylesheets").Colors, hoverColor:import("@stylesheets").Colors, size:import("@stylesheets").Typography, bold:boolean, multiDirection:boolean, cursor:string}} IconProps
 *
 * @type {import("react").ComponentType<IconProps>}
 */
export const Icon = styled.i.attrs(
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
