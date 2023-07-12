// #region imports
import Div from "@kits/Div";
import { responsiveUpperBoundBreakpoint } from "@configs/general";
import type { HOCFunctionalComponent } from "@_types/components";
// #endregion

const BlogCardsWrapper: HOCFunctionalComponent = (props) => {
  const { children } = props;

  return (
    <Div
      grid={["repeat(1, 1fr)", , "1rem", "1rem", "row"]}
      responsive={{
        [responsiveUpperBoundBreakpoint]: {
          styles: { gridTemplateColumns: "repeat(3, 1fr)" },
        },
      }}
      overflowX="auto"
      thinScrollbar
      pb="2"
    >
      {children}
    </Div>
  );
};

export default BlogCardsWrapper;
