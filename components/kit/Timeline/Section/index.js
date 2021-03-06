import React from "react";
import { Div, Text } from "@kits";
import { TimelineSectionItem } from "./Item";
import { TimelineSectionYear } from "./Year";

export const TimelineSection = (props) => {
  const { year, items, last } = props || {};

  return (
    <Div
      className="timeline-section"
      position="relative"
      my="5"
      px="3"
      py="4"
      curve="sm"
      bg="bg-secondary"
      before={{
        border: "border-light",
        borderW: 2,
        height: "calc(100% + 1rem)",
        position: "absolute",
        dimensions: { left: "-2rem", top: "1rem" },
        css: last ? {} : { content: `\"\"` },
      }}
      after={{
        border: "assistive-success",
        borderW: 4,
        width: "2rem",
        height: "2rem",
        position: "absolute",
        dimensions: { left: "-3rem", top: "-1rem" },
        curve: "circle",
        css: {
          content: `\"\"`,
          boxShadow: "0px 0px 4px 1px var(--color-assistive-success)",
        },
      }}
    >
      <TimelineSectionYear year={year} />
      <Div ml="3">
        {items.map((item) => (
          <TimelineSectionItem text={item} />
        ))}
      </Div>
    </Div>
  );
};
