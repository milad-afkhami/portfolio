import { ComponentType } from "react";
import styled, { keyframes } from "styled-components";
import { Props } from "./DivProps";
import { responsiveProps, getCol, paces } from "@stylesheets";
import { __reduce } from "@utils";
import { convertPropsToStyles } from "./convertPropsToStyles";
import { shouldForwardProp } from "@helpers";

/**
 * renders a custom div component with needed stylesheets.
 * Read more about it in Documentation( {@link http://tpi.uneed.ir:8888/lapert/lapert-web/blob/master/docs/kits/Div.md} )
 */
export const Div: ComponentType<Props> = styled.div
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
    }) => ({
      className:
        (container ? " container" : "") +
        (col ? getCol(col) : "") +
        (row ? " row" : "") +
        (hiddenScrollbar ? " hidden-scrollbar" : ""),
      ...(hover && !pace ? { pace: `var(--pace-fast)` } : {}),
    })
  )((props: Props) => {
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
