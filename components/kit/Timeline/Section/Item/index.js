import React from "react";
import { Div } from "@kits";
import { TimelineSectionItemTitle } from "./Title";
import { TimelineSectionItemDescription } from "./Description";

export const TimelineSectionItem = (props) => {
  const { text, index } = props || {};

  return (
    <Div mb="3" as="li" css={{ listStyle: "none" }}>
      <TimelineSectionItemTitle title={text} index={index} />
      <TimelineSectionItemDescription description={`${text}_desc`} />
    </Div>
  );
};
