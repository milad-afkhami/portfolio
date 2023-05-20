import Div from "@kits/Div";
import Text from "@kits/Text";
import ExpandableText from "@kits/ExpandableText";
import { If, Then, Else } from "@kits/ConditionalRendering";
import type { FC } from "react";
import type TextProps from "@kits/Text/props";

interface TimelineSectionItemDescriptionProps {
  description: string;
}

const TimelineSectionItemDescription: FC<
  TimelineSectionItemDescriptionProps
> = (props) => {
  const { description } = props;

  const isExpandable = description.length > 26;

  const textProps: TextProps = {
    size: "md",
    color: "text-secondary-main",
    noTranslation: true,
    css: { whiteSpace: "pre-line" },
  };

  if (!description) return null;

  return (
    <Div ml="3" width="fit-content">
      <If condition={isExpandable}>
        <Then>
          <ExpandableText {...textProps}>{description}</ExpandableText>
        </Then>
        <Else>
          <Text {...textProps}>{description}</Text>
        </Else>
      </If>
    </Div>
  );
};

export default TimelineSectionItemDescription;
