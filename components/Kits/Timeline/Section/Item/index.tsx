import Div from "@kits/Div";
import TimelineSectionItemTitle, {
  type TimelineSectionItemTitleProps,
} from "./Title";
import TimelineSectionItemDescription from "./Description";
import type { FC } from "react";

export type TimelineSectionItemProps = TimelineSectionItemTitleProps;

const TimelineSectionItem: FC<TimelineSectionItemProps> = (props) => {
  const { text, index } = props;

  return (
    <Div mb="3" as="li" css={{ listStyle: "none" }}>
      <TimelineSectionItemTitle text={text} index={index} />
      <TimelineSectionItemDescription description={`${text}_desc`} />
    </Div>
  );
};

export default TimelineSectionItem;
