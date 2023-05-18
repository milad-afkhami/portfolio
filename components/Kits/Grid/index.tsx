// #region imports
import Div from "@kits/Div";
import classNames from "@utils/classnames";
import generateColumnClassNames from "@stylesheets/utils/generateColumnClassNames";
import { responsiveUpperBoundBreakpoint } from "@configs/general";
import { type FC, useMemo } from "react";
import type { ColProps, RowProps } from "./props";
// #endregion

export const Row: FC<RowProps> = (props) => {
  const { children, className, reverse, ...rest } = props || {};

  return (
    <Div
      className={classNames("row", reverse && "row-reverse", className)}
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
export const Col: FC<ColProps> = (props) => {
  const {
    children,
    className,
    xs,
    sm,
    md,
    lg,
    xl,
    responsiveUpperBoundBreakpoint: _responsiveUpperBoundBreakpoint,
    ...rest
  } = props || {};

  const columnsClassNames = useMemo(() => {
    const columns = { xs, sm, md, lg, xl };

    if (_responsiveUpperBoundBreakpoint) {
      columns[responsiveUpperBoundBreakpoint] = _responsiveUpperBoundBreakpoint;
    }

    const colClassNames = generateColumnClassNames(columns);

    return colClassNames;
  }, [xs, sm, md, lg, xl, _responsiveUpperBoundBreakpoint]);

  return (
    <Div className={classNames(columnsClassNames, className)} {...rest}>
      {children}
    </Div>
  );
};
