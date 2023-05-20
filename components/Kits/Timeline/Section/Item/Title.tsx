import Text from "@kits/Text";
import type { FC } from "react";
import type { PropsWithIndex } from "@_types/components";

export type TimelineSectionItemTitleProps = PropsWithIndex<{ text: string }>;

const TimelineSectionItemTitle: FC<TimelineSectionItemTitleProps> = (props) => {
  const { text } = props;

  return (
    <Text
      as="p"
      size="lg"
      bold
      color="text-secondary-main"
      noTranslation
      transform="capitalize"
    >
      {text}
    </Text>
  );
};

export default TimelineSectionItemTitle;
