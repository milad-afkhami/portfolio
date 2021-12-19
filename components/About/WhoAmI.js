import React from "react";
import { Div, Text } from "@kits";
import { useState } from "@hooks";
import { __range } from "@utils";
import { AboutAvatar } from "./Avatar";

export const WhoAmI = (props) => {
  const {} = props || {};

  const paragraphsCount = 7;

  return (
    <Div
      flex={["center", , "column"]}
      my="4"
      responsive={{ md: { flex: ["start", "between", "row-reverse"] } }}
    >
      <Div col={{ xs: 12, md: 4 }}>
        <AboutAvatar />
      </Div>
      <Div col={{ xs: 12, md: 8 }}>
        {__range(paragraphsCount).map((i) => (
          <Div key={i} mb="1">
            <Text size="lg">{`about.p${i + 1}`}</Text>
          </Div>
        ))}
      </Div>
    </Div>
  );
};