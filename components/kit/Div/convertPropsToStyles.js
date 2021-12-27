import { Props } from "./DivProps";
import {
  prepareDimensions,
  curves,
  shadows,
  paces,
  prepareSpacing,
  getOtherSpacings,
  flexer,
  grider,
  c,
} from "@stylesheets";
import { matchParent } from "@stylesheets/predefined";
import { keyframes } from "styled-components";
import { isNullish, __kebabCase } from "@utils";

export function convertPropsToStyles(props: Props) {
  const {
    width,
    w,
    mw,
    Mw,
    height,
    h,
    mh,
    Mh,
    curve,
    shadow,
    pace,
    border,
    borderSide = "",
    borderW = 1,
    bg,
    bgImage,
    color,
    hover,
    hoverBg,
    hoverColor,
    hoverShadow,
    zoomOnHover,
    m,
    p,
    flex = "",
    flexPortion,
    display,
    opacity,
    col,
    grid,
    overflow,
    overflowX,
    overflowY,
    cursor,
    position,
    dimensions,
    zIndex,
    order,
    css,
    animation,
    blurBg,
    // matchParent,
    ...restProps
  } = props;

  return {
    ...(width ? { width: width || w } : {}),
    ...(mw ? { minWidth: mw } : {}),
    ...(Mw ? { maxWidth: Mw } : {}),
    ...(height ? { height: height || h } : {}),
    ...(mh ? { minHeight: mh } : {}),
    ...(Mh ? { maxHeight: Mh } : {}),
    ...(props.matchParent ? matchParent : {}),
    ...(position ? { position } : {}),
    ...(zIndex ? { zIndex } : {}),
    ...(dimensions ? prepareDimensions(dimensions) : {}),
    ...(curve
      ? {
          borderRadius: `var(--curve-${
            curve === true ? "sm" : curve
          }, ${curve})`,
        }
      : {}),
    ...(shadow ? { boxShadow: `var(--shadow-${shadow}, ${shadow})` } : {}),
    // ...(shadow ? { boxShadow: shadows[shadow] || shadow } : {}),
    ...(pace
      ? { transition: `all var(--pace-${__kebabCase(pace)}, ${pace})` }
      : {}),
    // ...(pace ? { transition: `all ${paces[pace || "fast"] || pace}` } : {}),
    ...(border
      ? {
          ["border" + borderSide.capitalize()]: `${borderW}px solid ${c(
            border
          )}`,
        }
      : {}),
    ...(bg ? { background: c(bg) } : {}),
    ...(bgImage ? { backgroundImage: bgImage } : {}),
    ...(overflow ? { overflow } : {}),
    ...(overflowX ? { overflowX } : {}),
    ...(overflowY ? { overflowY } : {}),
    ...(order ? { order } : {}),
    ...(cursor ? { cursor } : {}),
    ...(!isNullish(opacity) ? { opacity } : {}),
    ...(color ? { color: c(color) } : {}),
    // Array.from will convert "$" to ["$"] and will have no effect on ["$", ...]
    ...(m !== undefined && m.length
      ? {
          margin:
            m.includes("px") || m.includes("rem")
              ? m
              : prepareSpacing(Array.from(m)),
        }
      : {}),
    ...(p !== undefined && p.length
      ? { padding: prepareSpacing(Array.from(p)) }
      : {}),
    ...getOtherSpacings(restProps),
    ...(hover || hoverBg || hoverColor || hoverShadow || zoomOnHover
      ? {
          ...(!pace ? { transition: `all var(--pace-fast)` } : {}),
          ":hover": {
            ...(hoverBg ? { background: c(hoverBg) } : {}),
            ...(hoverColor ? { "& ,& *": { color: c(hoverColor) } } : {}),
            ...(hoverShadow
              ? { boxShadow: `var(--shadow-${hoverShadow}, ${hoverShadow})` }
              : {}),
            ...(zoomOnHover ? { transform: "scale(1.01)" } : {}),
          },
        }
      : {}),
    ...(display || flex ? { display: display || "flex" } : {}),
    ...(flexPortion ? { flex: flexPortion } : {}),
    ...(flex && flex.length ? flexer(flex[0], flex[1], flex[2], flex[3]) : ""),
    ...(grid && grid.length
      ? grider(grid[0], grid[1], grid[2], grid[3], grid[4], grid[5], grid[6])
      : ""),
    ...(blurBg ? { backdropFilter: "blur(15px)" } : {}),
    ...(css || {}),
    ...(animation
      ? {
          animation: keyframes(animation.keyframes),
          animationDuration: animation.duration || "var(--pace-x-slow)",
          ...(animation.iterationCount
            ? { animationIterationCount: animation.iterationCount }
            : {}),
          ...(animation.direction
            ? { animationDirection: animation.direction }
            : {}),
          ...(animation.timingFunction
            ? { animationTimingFunction: animation.timingFunction }
            : {}),
          ...(animation.fillMode
            ? { animationFillMode: animation.fillMode }
            : {}),
          ...(animation.playState
            ? { animationPlayState: animation.playState }
            : {}),
        }
      : {}),
  };
}
