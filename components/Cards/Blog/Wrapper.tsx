// #region imports
import Div from "@kits/Div";
import type { HOCFunctionalComponent } from "@_types/components";
// #endregion

const BlogCardsWrapper: HOCFunctionalComponent = (props) => {
  const { children } = props;

  return (
    <Div
      grid={["repeat(1, 1fr)", , "1rem", "1rem", "row"]}
      responsive={{
        sm: { css: { gridTemplateColumns: "repeat(2, 1fr)" } },
        md: { css: { gridTemplateColumns: "repeat(3, 1fr)" } },
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
