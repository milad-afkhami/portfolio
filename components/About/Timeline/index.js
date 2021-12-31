import React from "react";
import { Div } from "@kits";
import { AboutTimelineSection } from "./Section";
import { SectionTitle } from "@components/Layout";
import { aboutTimelineSections as sections } from "@config";

export const AboutTimeLine = (props) => {
  return (
    <Div my="5">
      <SectionTitle icon="timeline" title="about.timeline.title" />
      <Div ml="5">
        {sections.map(({ items, year }, i) => (
          <AboutTimelineSection
            key={year}
            title={year}
            items={items}
            last={i === sections.length - 1}
          />
        ))}
      </Div>
    </Div>
  );
};
