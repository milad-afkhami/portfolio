import React from "react";
import { Div, ExpandableText, Text } from "@kits";
import { useTranslation } from "@hooks";

export const AboutTimelineSectionItem = (props) => {
  const { text } = props || {};

  const t = useTranslation().t;
  const description = t(`about.timeline.${text}_desc`);

  return (
    <Div mb="3">
      <Text
        tag="p"
        size="lg-b"
        color="text-secondary"
        css={{
          textTransform: "capitalize",
        }}
      >
        {`about.timeline.${text}`}
      </Text>
      <ExpandableText
        size="md"
        ml="3"
        color="text-secondary"
        noTranslation
        width="fit-content"
      >
        {description}
      </ExpandableText>
    </Div>
  );
};
