import styled from "styled-components";
import getCol from "@stylesheets/utils/getCol";
import responsiveProps from "@stylesheets/utils/responsiveProps";
import __reduce from "lodash-es/reduce";
import convertPropsToStyles from "./convertPropsToStyles";
import shouldForwardProp from "@helpers/shouldForwardProp";

/**
 * renders a custom div component with needed stylesheets.
 * Read more about it in Documentation( {@link https://milad-afkhami.com/gists/div} )
 *
 * @type {import("react").ComponentType<import("./Props").Props>}
 */

const Div = styled.div
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

export default Div;
