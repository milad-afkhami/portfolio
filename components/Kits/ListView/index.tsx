import Div from "@kits/Div";
import ListItem from "./Item";
import { useMemo } from "react";
import __chunk from "lodash-es/chunk";

/**
 * @typedef {Array<{ title:string, subtitle:string }>} ListViewItemProps
 * @typedef {{items:ListViewItemProps, color:import("@stylesheets").Colors, hoverColor:import("@stylesheets").Colors, size:import("@stylesheets").Typography, bold:boolean, multiDirection:boolean, cursor:string}} ListViewProps
 *
 * @type {import("react").ComponentType<ListViewProps>}
 */

const ListView = (props) => {
  const { items, col = 2 } = props;

  const pivot = useMemo(() => Math.ceil(items.length / col), [items.length]);

  const columns = useMemo(() => __chunk(items, pivot), [items.length]);

  return (
    <Div
      height="100%"
      width="100%"
      border="border-light"
      curve="xsm"
      flex={[, , "row"]}
      css={{
        gap: "1rem",
      }}
      p="2"
    >
      {columns.map((colItems, j) => (
        <Div width="100%" px="0">
          {colItems.map((item, i) => (
            <ListItem index={j === 0 ? i + 1 : pivot + i + 1} {...item} />
          ))}
        </Div>
      ))}
    </Div>
  );
};

export default ListView;
