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
type RecursiveBranches<T> = (
  | T
  | { title: string; points: RecursiveBranches<T> }
)[];

// This is a declaration because we didn't wanted to
// convert `project.d.ts` file from a declaration file to a module.
interface TreeProps {
  /** tree branches, can be an array of strings or another tree */
  branches: RecursiveBranches<string>;

  /** Whether or not first degree details should be open by default */
  defaultOpen?: boolean;
  /** Whether or not non-first degree details should be open by default */
  defaultSubsOpen?: boolean;
  ns?: I18NNameSpaces;
}
