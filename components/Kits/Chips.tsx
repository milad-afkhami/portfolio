import { Div } from "style-wiz";
import { Chip, type ChipProps } from "ui-wiz";
import type { FC } from "react";

interface ChipsProps {
  items: ChipProps[];
}

const Chips: FC<ChipsProps> = (props) => {
  const { items } = props;

  return (
    <Div flex={["center", "flex-start", , "wrap"]} gap="2">
      {items.map((item) => (
        <Chip key={item.text} {...item} />
      ))}
    </Div>
  );
};

export default Chips;
