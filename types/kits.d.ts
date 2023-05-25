/**
 * @example
 * type TreeProps = {
 *   branches: Array<string | Dictionary<TreeProps["branches"]>>;
 * }
 *
 * @description
 * the above workaround didn't work, so I implemented this hack.
 *
 * @example
 * type TreeProps = {
 *   branches: Array<string | Dictionary<TreeProps["branches"]>>;
 * }
 */
type RecursiveTree<T> = T | Dictionary<T | RecursiveTree<T>>;

// This is placed here because we didn't wanted to
// convert `project.d.ts` file from a declaration file to a module.
type TreeProps = {
  /** tree branches, can be an array of strings or another tree */
  branches: Array<RecursiveTree<string>>;
  // | MergeBy<{ title: string }, { [property in T]: TreeProps<T>["branches"] }>

  /** the key that contains subtrees branches */
  branchesAccessor?: string;
  /** Whether or not first degree details should be open by default */
  defaultOpen?: boolean;
  /** Whether or not non-first degree details should be open by default */
  defaultSubsOpen?: boolean;
  ns?: I18NNameSpaces;
};
