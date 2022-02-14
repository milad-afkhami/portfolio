import React from "react";
import { ExpandableText, Text } from "@kits";
import { useTranslation } from "@hooks";

export const TimelineSectionItemDescription = (props) => {
  const { description } = props || {};

  const t = useTranslation().t;
  const text = t(description);
  const hashMoreButton = text.length > 26;

  const textProps = {
    size: "md",
    ml: "3",
    color: "text-secondary",
    noTranslation: true,
    width: "fit-content",
  };

  return hashMoreButton ? (
    <ExpandableText {...textProps}>{text}</ExpandableText>
  ) : (
    <Text {...textProps}>{text}</Text>
  );
};
