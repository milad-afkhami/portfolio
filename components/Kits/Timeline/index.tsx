import Div from "@kits/Div";
import TimelineSection, { type TimelineSectionProps } from "./Section";
import SectionTitle from "@components/Layout/Title/Section";
import type { FC } from "react";
import IconProps from "@kits/Icon/props";
import TextProps from "@kits/Text/props";

export interface TimelineProps {
  title: string;
  ns?: TextProps["ns"];
  icon?: IconProps["name"];
  sections: Array<Omit<TimelineSectionProps, "isLast">>;
}

const Timeline: FC<TimelineProps> = (props) => {
  const { title, icon = "timeline", ns, sections } = props;

  return (
    <Div mb="5">
      <SectionTitle icon={icon} title={title} ns={ns} />
      <Div ml="5">
        {sections.map(({ items, year }, i) => (
          <TimelineSection key={i} year={year} items={items} ns={ns} />
        ))}
      </Div>
    </Div>
  );
};

export default Timeline;
