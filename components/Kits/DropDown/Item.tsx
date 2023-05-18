import Div from "@kits/Div";
import Text from "@kits/Text";
import Image from "@kits/Image";
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
      <Div flex={["center", "center"]} mx="2">
        <Image src={image} width="20px" height="20px" quality={1} />
      </Div>
      <Div flex={["center", "center"]}>
        <Text size="sm-b">{label}</Text>
      </Div>
    </Div>
  );
};

export default DropDownItem;
