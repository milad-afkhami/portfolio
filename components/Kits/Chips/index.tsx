import { Div } from "style-wiz";
import Chip, { type ChipProps } from "./Item";
import type { FC } from "react";

interface ChipsProps {
  items: ChipProps[];
  secondary?: boolean;
}

const Chips: FC<ChipsProps> = (props) => {
  const { items, secondary } = props;

  return (
    <Div flex={["center", "flex-start", , "wrap"]} gap="2">
      {items.map((item) => (
        <Chip key={item.label} {...item} secondary={secondary} />
      ))}
    </Div>
  );
};

export default Chips;
