import Text from "@kits/Text";
import { TreeWrapper } from "./Wrapper";

/**
 * Renders an expandible tree.
 * @param {Array} branches tree branches, can be an array of strings or another tree
 * @param {string} branchesAccessor the key that contains subtrees branches
 * @param {boolean} defaultOpen Whether or not first degree details should be open by default
 * @param {boolean} defaultSubsOpen Whether or not non-first degree details should be open by default
 */

const Tree = (props) => {
  const {
    branches,
    branchesAccessor = "branches",
    defaultOpen = true,
    defaultSubsOpen = false,
  } = props || {};

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
            <Text tag="summary" className="tree-nav__item-title">
              {typeof branch === "string" ? branch : branch.title}
            </Text>
            {branch?.[branchesAccessor]?.length ? (
              <Tree
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