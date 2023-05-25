import Text from "@kits/Text";
import TreeWrapper from "./Wrapper";
import { FC, useCallback } from "react";

/** Renders an expandable tree. */
const Tree: FC<TreeProps> = (props) => {
  const {
    ns,
    branches,
    branchesAccessor = "branches",
    defaultOpen = true,
    defaultSubsOpen = false,
  } = props;

  const isExpandableBranch = useCallback(
    (
      br: ValueOf<TreeProps["branches"]>
    ): br is Exclude<ValueOf<TreeProps["branches"]>, string> =>
      Boolean(typeof br === "object" && br?.[branchesAccessor]),
    [branchesAccessor]
  );

  return (
    <TreeWrapper>
      {branches.map((branch, i) =>
        branch ? (
          <details
            key={i}
            className={`tree-nav__item ${
              isExpandableBranch(branch) ? "is-expandable" : ""
            } hidden-scrollbar`}
            open={defaultOpen}
          >
            <Text as="summary" className="tree-nav__item-title" ns={ns}>
              {typeof branch === "string" ? branch : branch.title}
            </Text>
            {isExpandableBranch(branch) &&
            Array.isArray(branch?.[branchesAccessor]) ? (
              <Tree
                ns={ns}
                branches={branch[branchesAccessor]}
                branchesAccessor={branchesAccessor}
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
