import React from "react";
import { Div, Text } from "@kits";
import { __map } from "@utils";
import { AboutTimelineSection } from "./Section";

export const AboutTimeLine = (props) => {
  const section = {
    1998: ["born"],
    2003: ["earlySchool"],
    2004: ["startingSchool"],
    2008: ["firstComputer"],
    2014: ["choosingNEAPath"],
    2018: ["university", "tookCoupleOfSemestersOff"],
    2019: ["changingField", "firstDayAtWork"],
    2020: ["growingMyHair", "leftMyFirstJob", "startingAtAppTech"],
    2021: ["startingAtArshCo", "becomingTeamLead"],
    2022: ["ielts"],
  };

  return (
    <Div>
      {__map(section, (items, year) => (
        <AboutTimelineSection title={year} items={items} />
      ))}
    </Div>
  );
};
