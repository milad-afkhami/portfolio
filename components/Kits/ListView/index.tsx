import { useMemo, type FC } from "react";
import { Div } from "style-wiz";
import ListItem, { type ListViewItemProps } from "./Item";
import __chunk from "lodash-es/chunk";

interface ListViewProps {
  items: Array<ListViewItemProps>;
  col?: number;
}

const ListView: FC<ListViewProps> = (props) => {
  const { items, col = 2 } = props;

  const pivot = useMemo(
    () => Math.ceil(items.length / col),
    [items.length, col]
  );

  const columns = useMemo(() => __chunk(items, pivot), [items, pivot]);

  return (
    <Div
      height="100%"
      width="100%"
      border="border-light-main"
      curve="xsm"
      display="flex"
      gap="1rem"
      p="2"
    >
      {columns.map((colItems, j) => (
        <Div key={j} width="100%" px="0">
          {colItems.map((item, i) => (
            <ListItem
              key={i}
              index={j === 0 ? i + 1 : pivot + i + 1}
              {...item}
            />
          ))}
        </Div>
      ))}
    </Div>
  );
};

export default ListView;
