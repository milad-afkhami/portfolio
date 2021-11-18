import React from "react";
import { Div, Text } from "@kits";
import { isNullish } from "@utils";
import { c } from "@stylesheets";
import styled from "styled-components";

export const Tab = (props) => {
  const { label, count, active, disabled, onClick } = props || {};

  const color = active ? "text-primary" : "text-tertiary";

  return (
    <StyledDiv
      onClick={onClick}
      flex={["start", "end", "column"]}
      mx="3"
      height="70px"
      position="relative"
      cursor={disabled ? "not-allowed" : "pointer"}
    >
      <Div height="50%" pace="fast">
        <Text size="lg" color={color} noTranslation>
          {isNullish(count) ? "" : count}
        </Text>
      </Div>
      <Div height="50%" pace="fast" position="relative">
        <Text size="sm" color={color}>
          {label}
        </Text>
        <Div
          position="absolute"
          width=".5rem"
          height=".5rem"
          dimensions={{ left: "calc(50% - .25rem)", bottom: "0" }}
          curve="circle"
          mx="auto"
          pace="normal"
          bg={active ? "brand" : "transparent"}
        />
      </Div>
    </StyledDiv>
  );
};

const StyledDiv = styled(Div)`
  flex: 1;
  user-select: none";
  :hover ${Text} {
    color: ${() => c("text-primary")};
  },
`;
