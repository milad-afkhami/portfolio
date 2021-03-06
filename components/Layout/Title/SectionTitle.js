import React from "react";
import { Div, Icon, Image, Text } from "@kits";
import { THEMES } from "@constants";

export const SectionTitle = (props) => {
  const { icon, title, tag = "h3" } = props || {};

  return (
    <Div flex={["center", "start"]} mb="2">
      {icon && (
        <Div flex={["center", "center"]}>
          <Icon name={icon} size="h-lg" hoverColor={null} cursor="default" />
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
