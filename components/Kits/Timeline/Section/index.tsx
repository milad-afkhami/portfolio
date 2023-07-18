import { Div } from "style-wiz";
import TimelineSectionWrapper from "./Wrapper";
import TimelineSectionYear, { type TimelineSectionYearProps } from "./Year";
import TimelineSectionItem, { type TimelineSectionItemProps } from "./Item";
import type { FC } from "react";
import type { TextProps } from "@kits/Text";

export interface TimelineSectionProps extends TimelineSectionYearProps {
  // isLast: boolean;
  items: Array<TimelineSectionItemProps["text"]>;
  ns?: TextProps["ns"];
}

const TimelineSection: FC<TimelineSectionProps> = (props) => {
  const { year, items, ns } = props;

  return (
    <TimelineSectionWrapper>
      <TimelineSectionYear year={year} />
      <Div ml="3" as="ul">
        {items.map((item, i) => (
          <TimelineSectionItem key={i} index={i} text={item} ns={ns} />
        ))}
      </Div>
    </TimelineSectionWrapper>
  );
};

export default TimelineSection;
