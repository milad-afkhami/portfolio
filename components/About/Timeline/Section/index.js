import React from "react";
import { Div, Text } from "@kits";
import { AboutTimelineSectionItem } from "./Item";

export const AboutTimelineSection = (props) => {
  const { title, items } = props || {};

  return (
    <Div>
      <Div props>
        <Text size="h-md">{title}</Text>
      </Div>
      {items.map((item) => (
        <AboutTimelineSectionItem />
      ))}
    </Div>
  );
};
