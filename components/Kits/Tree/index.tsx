import { useCallback, type FC } from "react";
import Text from "@kits/Text";
import TreeWrapper from "./Wrapper";

/** Renders an expandable tree. */
const Tree: FC<TreeProps> = (props) => {
  const { ns, branches, defaultOpen = true, defaultSubsOpen = false } = props;

  const isExpandableBranch = useCallback(
    (
      br: ValueOf<TreeProps["branches"]>
    ): br is Exclude<ValueOf<TreeProps["branches"]>, string> =>
      Boolean(typeof br === "object" && br.points),
    []
  );

  return (
    <TreeWrapper>
      {branches.map((branch, i) =>
        branch ? (
          <details
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className={`tree-nav__item ${
              isExpandableBranch(branch) ? "is-expandable" : ""
            } hidden-scrollbar`}
            open={defaultOpen}
          >
            <Text as="summary" className="tree-nav__item-title" ns={ns}>
              {typeof branch === "string" ? branch : branch.title}
            </Text>
            {isExpandableBranch(branch) && Array.isArray(branch.points) ? (
              <Tree
                ns={ns}
                branches={branch.points}
                defaultOpen={defaultSubsOpen}
                defaultSubsOpen={defaultSubsOpen}
              />
            ) : null}
          </details>
        ) : null
      )}
    </TreeWrapper>
  );
};

export default Tree;
