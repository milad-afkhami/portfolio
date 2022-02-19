import React from "react";
import { Div, Icon, Text } from "@kits";
import { contactOptions } from "@config";

export const ResumeHeaderContact = () => {
  return (
    <Div flexPortion="1" height="100%" flex={["end", "around", "column"]}>
      {contactOptions.map(({ type, label, value }) => (
        <Div flex={["center", "center"]}>
          <Div mx="2" flex={["center", "center"]}>
            <Text size="sm" Mw="100%" truncate>
              {label || value}
            </Text>
          </Div>
          <Div flex={["center", "center"]}>
            <Icon name={type} size="sm" />
          </Div>
        </Div>
      ))}
    </Div>
  );
};
