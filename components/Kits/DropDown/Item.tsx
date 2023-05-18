import Div from "@kits/Div";
import type { FC } from "react";
import type DivProps from "@kits/Div/props";

export type DropDownItemProps = MergeBy<
  DivProps,
  { label: string; id: string; image: string }
>;

const DropDownItem: FC<DropDownItemProps> = (props) => {
  const { image, label, onClick, ...rest } = props;

  return (
    <Div
      flex={["center", "start"]}
      height="2.5rem"
      cursor="pointer"
      hoverBg="bg-tertiary"
      px="1"
      onClick={onClick}
      {...rest}
    >
      <DropDownImage src={image} />
      <DropDownLabel label={text} />
    </Div>
  );
};

export default DropDownItem;
