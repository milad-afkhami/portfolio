import React from "react";
import { Div, Image, Text } from "@kits";
import { THEMES } from "@constants";

export const SectionTitle = (props) => {
  const { icon, title, tag = "h3" } = props || {};

  return (
    <Div flex={["center", "start"]} mb="2">
      {icon && (
        <Div flex={["center", "center"]}>
          <Image
            priority
            src={`/images/icons/${icon}.png`}
            width="24px"
            height="24px"
            responsive={{ width: "32px", height: "32px" }}
            css={{
              [`[data-theme="${THEMES.DARK}"] &`]: { filter: "invert(1)" },
            }}
          />
        </Div>
      )}
      <Div mx={icon && "2"}>
        <Text
          size={tag === "h3" ? "h-sm-b" : tag === "h4" ? "lg-b" : ""}
          as={tag}
        >
          {title}
        </Text>
      </Div>
    </Div>
  );
};
