import React from "react";
import { Div, Image, Text } from "@kits";
import { THEMES } from "@constants";

export const SectionTitle = (props) => {
  const { icon, title } = props || {};

  return (
    <Div flex={["center", "start"]} mb="2">
      {icon && (
        <Div flex={["center", "center"]}>
          <Image
            priority
            src={`/images/icons/${icon}.png`}
            width="32px"
            height="32px"
            css={{
              [`[data-theme="${THEMES.DARK}"] &`]: { filter: "invert(1)" },
            }}
          />
        </Div>
      )}
      <Div mx="2">
        <Text size="h-sm-b" as="h3">
          {title}
        </Text>
      </Div>
    </Div>
  );
};
