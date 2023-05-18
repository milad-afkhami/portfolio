import Div from "@kits/Div";
import TimelineSection, { type TimelineSectionProps } from "./Section";
import SectionTitle from "@components/Layout/Title/Section";
import type { FC } from "react";
import type { IconName } from "@kits/Icon/props";

interface TimelineProps {
  title: string;
  icon?: IconName;
  sections: Array<Omit<TimelineSectionProps, "isLast">>;
}

const Timeline: FC<TimelineProps> = (props) => {
  const { title, icon = "timeline", sections } = props;

  return (
    <Div mb="5">
      <SectionTitle icon={icon} title={title} />
      <Div ml="5">
        {sections.map(({ items, year }, i) => (
          <TimelineSection key={i} year={year} items={items} />
        ))}
      </Div>
    </Div>
  );
};

export default Timeline;
