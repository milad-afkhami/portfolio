import React from "react";
import { Div } from "@kits";
import { AboutTimelineSection } from "./Section";
import { SectionTitle } from "@components/Layout";

export const AboutTimeLine = (props) => {
  const sections = [
    { year: 2022, items: ["ielts"] },
    { year: 2021, items: ["startingAtArshCo", "becomingTeamLead"] },
    {
      year: 2020,
      items: ["growingMyHair", "leftMyFirstJob", "startingAtAppTech"],
    },
    { year: 2019, items: ["changingField", "firstDayAtWork"] },
    { year: 2018, items: ["university", "tookCoupleOfSemestersOff"] },
    { year: 2014, items: ["choosingNEAPath"] },
    { year: 2008, items: ["firstComputer"] },
    { year: 2004, items: ["startingSchool"] },
    { year: 2003, items: ["earlySchool"] },
    { year: 1998, items: ["born"] },
  ];

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
