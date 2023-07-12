import prepareDimensions from "@stylesheets/utils/prepareDimensions";
import prepareSpacing from "@stylesheets/utils/prepareSpacing";
import getOtherSpacings from "@stylesheets/utils/getOtherSpacings";
import flexer from "@stylesheets/utils/flex";
import grider from "@stylesheets/utils/grid";
import colorVar from "@stylesheets/utils/var/color";
import isNullish from "@utils/isNullish";
import __kebabCase from "lodash-es/kebabCase";
import __capitalize from "lodash-es/capitalize";
import type { CSSAttribute } from "goober";
import type DivProps from "./props";

export default function convertPropsToStyles(
  props: DivProps
): Partial<CSSAttribute> {
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
    borderW = "1px",
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
    gap,
    flex,
    flexPortion,
    display,
    opacity,
    // col,
    grid,
    overflow,
    overflowX,
    overflowY,
    cursor,
    position,
    dimensions,
    zIndex,
    order,
    pointerEvents,
    rotate,
    styles,
    animation,
    blurBg,
    matchParent,
    ...restProps
  } = props;

  return {
    ...(width || w ? { width: width || w } : {}),
    ...(mw ? { minWidth: mw } : {}),
    ...(Mw ? { maxWidth: Mw } : {}),
    ...(height || h ? { height: height || h } : {}),
    ...(mh ? { minHeight: mh } : {}),
    ...(Mh ? { maxHeight: Mh } : {}),
    ...(matchParent
      ? {
          width: "100%",
          minWidth: "100%",
          maxWidth: "100%",
          height: "100%",
          minHeight: "100%",
          maxHeight: "100%",
        }
      : {}),
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
    ...(gap ? { gap: `var(--spacing-${gap}, ${gap})` } : {}),
    ...(pace
      ? { transition: `all var(--pace-${__kebabCase(pace)}, ${pace})` }
      : {}),
    ...(border
      ? {
          [`border${__capitalize(borderSide)}`]: `${borderW} solid ${colorVar(
            border
          )}`,
        }
      : {}),
    ...(bg ? { background: colorVar(bg) } : {}),
    ...(bgImage ? { backgroundImage: bgImage } : {}),
    ...(overflow ? { overflow } : {}),
    ...(overflowX ? { overflowX } : {}),
    ...(overflowY ? { overflowY } : {}),
    ...(order ? { order } : {}),
    ...(pointerEvents ? { pointerEvents } : {}),
    ...(rotate
      ? {
          transform: `rotate(calc(${
            typeof rotate === "string"
              ? `${rotate.replace("q", "")} * 90`
              : rotate
          }deg))`,
        }
      : {}),
    ...(cursor ? { cursor } : {}),
    ...(!isNullish(opacity) ? { opacity } : {}),
    ...(color ? { color: colorVar(color) } : {}),
    // @ts-ignore
    ...(!isNullish(m) ? { margin: prepareSpacing(m) } : {}),
    // @ts-ignore
    ...(!isNullish(p) ? { padding: prepareSpacing(p) } : {}),
    ...getOtherSpacings(restProps),
    ...(hover || hoverBg || hoverColor || hoverShadow || zoomOnHover
      ? {
          ...(!pace ? { transition: `all var(--pace-fast)` } : {}),
          "&:hover": {
            ...(hoverBg ? { background: colorVar(hoverBg) } : {}),
            ...(hoverColor
              ? { "& ,& *": { color: colorVar(hoverColor) } }
              : {}),
            ...(hoverShadow
              ? { boxShadow: `var(--shadow-${hoverShadow}, ${hoverShadow})` }
              : {}),
            ...(zoomOnHover ? { transform: "scale(1.01)" } : {}),
          },
        }
      : {}),
    ...(display ? { display: display || "flex" } : {}),
    ...(flexPortion ? { flex: flexPortion } : {}),
    ...(flex && flex.length ? flexer(...flex) : {}),
    ...(grid && grid.length ? grider(...grid) : {}),
    ...(blurBg ? { backdropFilter: "blur(15px)" } : {}),
    ...(styles || {}),
    ...(animation
      ? {
          // animation: keyframes(animation.keyframes),
          animationName: animation.name,
          animationDuration: animation.duration ?? "var(--pace-x-slow)",
          animationTimingFunction: animation.timingFunction ?? "linear",
          animationIterationCount: animation.iterationCount ?? "infinite",
          ...(animation.direction
            ? { animationDirection: animation.direction }
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
