// #region imports
import { Div, type DivProps } from "style-wiz";
import responsiveStyles from "@helpers/responsiveStyles";
import { responsiveUpperBoundBreakpoint } from "@configs/general";
import { type FC, useMemo, useCallback } from "react";
import type { RowProps, ColProps, ColValue } from "./props";
import type { CSSAttribute } from "goober";
// #endregion

export const Row: FC<RowProps> = (props) => {
  const { children, reverse, ...rest } = props;

  return (
    <Div
      flex={[, , reverse ? "row-reverse" : "row", "wrap"]}
      mx="-var(--spacing-2)"
      {...rest}
    >
      {children}
    </Div>
  );
};

/**
 * @component controls row columns of the element
 *
 * @example
 * <Col xs={12} sm={9} md={6} lg={4} xl={3} />
 *
 * @example
 * <Col xs={12} sm={6} md={3} />
 *
 * @example
 * <Col xs={12} responsiveUpperBoundBreakpoint={6} />
 */
export const Col: FC<ColProps & DivProps> = (props) => {
  const {
    children,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    responsiveUpperBoundBreakpoint: responsiveUpperBoundBreakpointValue,
    ...rest
  } = props;

  const columns = useMemo(() => {
    const result: ColProps = { xs, sm, md, lg, xl };

    if (responsiveUpperBoundBreakpointValue) {
      result[responsiveUpperBoundBreakpoint] =
        responsiveUpperBoundBreakpointValue;
    }

    return result;
  }, [xs, sm, md, lg, xl, responsiveUpperBoundBreakpointValue]);

  const getColPortionPercentage = useCallback((col: ColValue) => {
    const _col = Number(col);
    if (_col < 0 || _col > 12) return "";
    const isSecondHalf = Math.min(Math.floor(_col / 6), 1);
    return ((_col - isSecondHalf * 6) * 8.333333 + isSecondHalf * 50).toFixed(
      1
    );
  }, []);

  const styles = useMemo(
    () =>
      Object.entries(columns).reduce<CSSAttribute>((acc, [breakpoint, col]) => {
        if (col) {
          const result = {
            flex: `0 0 ${getColPortionPercentage(col)}%`,
            maxWidth: `${getColPortionPercentage(col)}%`,
          };
          if (breakpoint === "xs") Object.assign(acc, result);
          Object.assign(
            acc,
            responsiveStyles(breakpoint as Breakpoints, result)
          );
        }
        return acc;
      }, {}),
    [columns, getColPortionPercentage]
  );

  return (
    <Div position="relative" width="100%" px="2" styles={styles} {...rest}>
      {children}
    </Div>
  );
};
