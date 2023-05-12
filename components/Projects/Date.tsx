import React from "react";
import { Div, Icon, Text } from "@kits";

export const ProjectDate = (props) => {
  return (
    <Div flex={["center", "start"]} mb="3">
      <Div flex={["center", "center"]} width="30px">
        <Icon name="calendar" size="h-md" />
      </Div>
      <Div mx="2">
        <Text size="md-b" tag="time">
          {props.date}
        </Text>
      </Div>
    </Div>
  );
};
