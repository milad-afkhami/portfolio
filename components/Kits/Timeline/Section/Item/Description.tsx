import Div from "@kits/Div";
import Text from "@kits/Text";
import ExpandableText from "@kits/ExpandableText";
import { If, Then, Else } from "@kits/ConditionalRendering";
import useTranslation from "@hooks/useTranslation";
import type { FC } from "react";
import type TextProps from "@kits/Text/props";

interface TimelineSectionItemDescriptionProps {
  description: string;
}

const TimelineSectionItemDescription: FC<
  TimelineSectionItemDescriptionProps
> = (props) => {
  const { description } = props;

  const { t } = useTranslation();
  const text = t(description, { defaultValue: "" });
  const isExpandable = text.length > 26;

  const textProps: TextProps = {
    size: "md",
    color: "text-secondary",
    noTranslation: true,
    css: { whiteSpace: "pre-line" },
  };

  return (
    <If condition={text}>
      <Then>
        <Div ml="3" width="fit-content">
          <If condition={isExpandable}>
            <Then>
              <ExpandableText {...textProps}>{text}</ExpandableText>
            </Then>
            <Else>
              <Text {...textProps}>{text}</Text>
            </Else>
          </If>
        </Div>
      </Then>
    </If>
  );
};

export default TimelineSectionItemDescription;
