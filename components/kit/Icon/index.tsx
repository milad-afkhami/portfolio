import styled from "styled-components";
import setTextTypography from "@stylesheets/utils/setTextTypography";
import { c } from "@stylesheets/getColorVariable";

/**
 * @typedef {("calendar"|"music-2"|"song-2"|"ruler"|"measure-2"|"gallery"|"tools"|"measure"|"moon"|"hash"|"nested-list"|"calendar1"|"clock"|"time"|"history"|"list"|"info"|"headphones"|"music"|"song"|"film"|"show"|"book"|"sun1"|"chevron-right"|"sun"|"copy-outline"|"focus-center-2"|"timeline"|"whatsapp"|"telegram"|"skype"|"linkedin"|"email")} IconName
 * @typedef {{name:IconName, color:import("@stylesheets").Colors, hoverColor:import("@stylesheets").Colors, size:import("@stylesheets").Typography, bold:boolean, multiDirection:boolean, cursor:string}} IconProps
 *
 * @type {import("react").ComponentType<IconProps>}
 */

const Icon = styled.i.attrs(
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

export default Icon;
