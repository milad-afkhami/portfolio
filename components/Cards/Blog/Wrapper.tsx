// #region imports
import { Div } from "style-wiz";
import responsiveStyles from "@helpers/responsiveStyles";
import { responsiveUpperBoundBreakpoint } from "@configs/general";
import type { HOCFunctionalComponent } from "@_types/components";
// #endregion

const BlogCardsWrapper: HOCFunctionalComponent = (props) => {
  const { children } = props;

  return (
    <Div
      grid={["repeat(1, 1fr)", , "1rem", "1rem", "row"]}
      styles={responsiveStyles(responsiveUpperBoundBreakpoint, {
        gridTemplateColumns: "repeat(3, 1fr)",
      })}
      overflowX="auto"
      thinScrollbar
      pb="2"
    >
      {children}
    </Div>
  );
};

export default BlogCardsWrapper;
