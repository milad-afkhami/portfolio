import Div from "@kits/Div";
import Text from "@kits/Text";
import Icon from "@kits/Icon";
import { If, Then } from "@kits/ConditionalRendering";
import type TextProps from "@kits/Text/props";
import type { IconName } from "@kits/Icon/props";
import type { FC } from "react";

interface SectionTitleProps {
  title?: string;
  icon?: IconName;
  tag?: TextProps["as"];
}

const SectionTitle: FC<SectionTitleProps> = (props) => {
  const { icon, title, tag = "h3" } = props;

  if (!title) return null;

  let size: TextProps["size"];
  switch (tag) {
    case "h3":
      size = "h-sm";
      break;
    case "h4":
      size = "lg";
      break;
    default:
      break;
  }

  return (
    <Div flex={["center", "start"]} mb="2">
      <If condition={icon}>
        <Then>
          <Div flex={["center", "center"]}>
            <Icon name={icon!} size="h-lg" />
          </Div>
        </Then>
      </If>
      <Div mx={icon ? 2 : 0}>
        <Text size={size} bold as={tag}>
          {title}
        </Text>
      </Div>
    </Div>
  );
};

export default SectionTitle;
