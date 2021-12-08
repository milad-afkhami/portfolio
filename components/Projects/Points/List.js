import React from "react";
import { Div, Text } from "@kits";

export const ProjectPointsList = (props) => {
  const { points } = props || {};

  return (
    <Div as="ul" mx="4">
      {points.map((point) => (
        <>
          {point ? (
            <Div as="li" mb="3">
              <Text size="md">
                {typeof point === "string" ? point : point.title}
              </Text>
            </Div>
          ) : null}
          {point?.points?.length ? (
            <ProjectPointsList points={point.points} />
          ) : null}
        </>
      ))}
    </Div>
  );
};
