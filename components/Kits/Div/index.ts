import { styled } from "goober";
import { forwardRef } from "react";
import __reduce from "lodash-es/reduce";
import convertPropsToStyles from "./convertPropsToStyles";
import responsiveProps from "@stylesheets/utils/responsiveProps";
import type DivProps from "./props";

/**
 * renders a custom div component with needed stylesheets.
 * Read more about it in Documentation( {@link https://milad-afkhami.com/gists/div} )
 */

const Div = styled(
  "div",
  forwardRef
)<DivProps>((props) => {
  const { responsive, after, before, hover, ...restProps } = props;
  return {
    ...convertPropsToStyles(restProps as DivProps),
    ...(responsive
      ? __reduce(
          responsiveProps(responsive),
          (res: Dictionary<unknown>, v, k) => {
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
