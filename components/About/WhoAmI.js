import React from "react";
import { Div, Text } from "@kits";
import { __range } from "@utils";
import { AboutAvatar } from "./Avatar";

export const WhoAmI = (props) => {
  const {} = props || {};

  const paragraphsCount = 7;

  return (
    <Div
      flex={["center", , "column"]}
      my="4"
      row
      responsive={{ md: { flex: ["start", "between", "row-reverse"] } }}
    >
      <Div col={{ xs: 12, md: 3 }} mb="4">
        <AboutAvatar />
      </Div>
      <Div col={{ xs: 12, md: 9 }}>
        {__range(paragraphsCount).map((i) => (
          <Div key={i} mb="2">
            <Text size="lg" tag="p" align="justify">{`about.p${i + 1}`}</Text>
          </Div>
        ))}
      </Div>
    </Div>
  );
};
