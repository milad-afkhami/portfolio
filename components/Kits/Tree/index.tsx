import Text from "@kits/Text";
import TreeWrapper from "./Wrapper";
import type { FC } from "react";
import type TextProps from "@kits/Text/props";

export type TreeProps = {
  /** tree branches, can be an array of strings or another tree */
  branches: Array<string | Dictionary<TreeProps["branches"]>>;
  // | MergeBy<{ title: string }, { [property in T]: TreeProps<T>["branches"] }>

  /** the key that contains subtrees branches */
  branchesAccessor?: string;
  /** Whether or not first degree details should be open by default */
  defaultOpen?: boolean;
  /** Whether or not non-first degree details should be open by default */
  defaultSubsOpen?: boolean;
  ns?: TextProps["ns"];
};

/** Renders an expandable tree. */
const Tree: FC<TreeProps> = (props) => {
  const {
    ns,
    branches,
    branchesAccessor = "branches",
    defaultOpen = true,
    defaultSubsOpen = false,
  } = props;

  return (
    <TreeWrapper>
      {branches.map((branch, i) =>
        branch ? (
          <details
            key={i}
            className={`tree-nav__item ${
              branch?.[branchesAccessor] ? "is-expandable" : ""
            } hidden-scrollbar`}
            open={defaultOpen}
          >
            <Text as="summary" className="tree-nav__item-title" ns={ns}>
              {typeof branch === "string" ? branch : branch.title}
            </Text>
            {branch?.[branchesAccessor]?.length ? (
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
