import React from "react";
import { Div } from "@kits";
import { useTranslation } from "@hooks";
import { TimelineSectionItemTitle } from "./Title";
import { TimelineSectionItemDescription } from "./Description";

export const TimelineSectionItem = (props) => {
  const { text } = props || {};

  return (
    <Div mb="3">
      <TimelineSectionItemTitle title={text} />
      <TimelineSectionItemDescription description={`${text}_desc`} />
    </Div>
  );
};
