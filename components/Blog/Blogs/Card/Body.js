import React from "react";
import { Div, Text } from "@kits";

export const BlogCardBody = (props) => {
  const { title = "", summary = "" } = props || {};

  return (
    <Div>
      <Div mb="2">
        <Text
          tag="p"
          size="md-b"
          lineHeight="1.5"
          truncate
          css={{
            whiteSpace: "pre-wrap",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            lineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Text>
      </Div>
      {/* <Div><Text color="text-secondary" css={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }} >{summary}</Text></Div> */}
    </Div>
  );
};
