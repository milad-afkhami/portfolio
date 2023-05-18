import Div from "@kits/Div";
import TimelineSectionWrapper from "./Wrapper";
import TimelineSectionYear, { type TimelineSectionYearProps } from "./Year";
import TimelineSectionItem, { type TimelineSectionItemProps } from "./Item";
import type { FC } from "react";

export interface TimelineSectionProps extends TimelineSectionYearProps {
  // isLast: boolean;
  items: Array<TimelineSectionItemProps["text"]>;
}

const TimelineSection: FC<TimelineSectionProps> = (props) => {
  const { year, items } = props;

  return (
    <TimelineSectionWrapper>
      <TimelineSectionYear year={year} />
      <Div ml="3" as="ul">
        {items.map((item, i) => (
          <TimelineSectionItem key={i} index={i} text={item} />
        ))}
      </Div>
    </TimelineSectionWrapper>
  );
};

export default TimelineSection;
