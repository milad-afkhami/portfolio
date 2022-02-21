import styled from "styled-components";
import { responsiveProps, getCol } from "@stylesheets";
import { __reduce } from "@utils";
import { convertPropsToStyles } from "./convertPropsToStyles";
import { shouldForwardProp } from "@helpers";

/**
 * renders a custom div component with needed stylesheets.
 * Read more about it in Documentation( {@link https://portfolio-mili.vercel.app/gists/div} )
 *
 * @type {import("react").ComponentType<import("./Props").Props>}
 */
export const Div = styled.div
  .withConfig({ shouldForwardProp: shouldForwardProp("Div") })
  .attrs(
    ({
      col,
      container,
      row,
      responsive = {},
      className = "",
      hover,
      pace,
      hiddenScrollbar,
      thinScrollbar,
    }) => ({
      className:
        className +
        (container ? " container" : "") +
        (col ? getCol(col) : "") +
        (row ? " row" : "") +
        (hiddenScrollbar ? " hidden-scrollbar" : "") +
        (thinScrollbar ? " thin-scrollbar" : ""),
      ...(hover && !pace ? { pace: `var(--pace-fast)` } : {}),
    })
  )((props) => {
  const { responsive, after, before, hover, ...restProps } = props;
  return {
    ...convertPropsToStyles(restProps),
    ...(responsive
      ? __reduce(
          responsiveProps(responsive),
          (res, v, k) => {
            res[k] = convertPropsToStyles(v);
            return res;
          },
          {}
        )
      : {}),
    ...(after ? { "&:after": convertPropsToStyles(after) } : {}),
    ...(before ? { "&:before": convertPropsToStyles(before) } : {}),
    ...(hover ? { "&:hover": convertPropsToStyles(hover) } : {}),
  };
});
