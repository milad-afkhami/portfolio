import React from "react";
import { Div, Icon, Image, Text } from "@kits";

export function ResumeContactOption(props) {
  const { type, value } = props || {};

  return (
    <Div flex={["center", , "column"]}>
      <Div
        bg="brand"
        hoverBg="brand-hover"
        curve="circle"
        width="100px"
        height="100px"
        flex={["center", "center"]}
        position="relative"
        cursor="pointer"
        mb="3"
        // responsive={{ md: { width: "100px", height: "100px" } }}
      >
        <Image
          {...(type === "telegram"
            ? {
                src: `/images/icons/telegram.png`,
                width: "100px",
                height: "100px",
                fit: "contain",
              }
            : {
                src: `/images/icons/${type}.svg`,
                layout: "fill",
              })}
        />
      </Div>
      <Div mb="2">
        <Text color="brand" size="lg" css={{ textTransform: "uppercase" }}>
          {`resume.contact.${type}`}
        </Text>
      </Div>
      <Div>
        <Text color="brand-light">{value}</Text>
      </Div>
    </Div>
  );
}
