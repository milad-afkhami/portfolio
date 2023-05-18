import Div from "@kits/Div";
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
    <Div
      className="timeline-section"
      position="relative"
      my="5"
      px="3"
      py="4"
      curve="sm"
      bg="bg-secondary"
      before={{
        border: "border-light",
        borderW: 2,
        height: "calc(100% + 1rem)",
        position: "absolute",
        dimensions: { left: "-2rem", top: "1rem" },
        css: last ? {} : { content: `\"\"` },
      }}
      after={{
        border: "assistive-success",
        borderW: 4,
        width: "2rem",
        height: "2rem",
        position: "absolute",
        dimensions: { left: "-3rem", top: "-1rem" },
        curve: "circle",
        css: {
          content: `\"\"`,
          boxShadow: "0px 0px 4px 1px var(--color-assistive-success)",
        },
      }}
    >
      <TimelineSectionYear year={year} />
      <Div ml="3" as="ul">
        {items.map((item, i) => (
          <TimelineSectionItem key={i} index={i} text={item} />
        ))}
      </Div>
    </Div>
  );
};

export default TimelineSection;
