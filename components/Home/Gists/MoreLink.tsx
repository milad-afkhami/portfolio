import React from "react";
import { Div, Link, Text } from "@kits";

export const GistsMoreLink = (props) => {
  return (
    <Div mt="2">
      <Link
        href="/gists"
        width="100%"
        height="3rem"
        flex={["center", "center"]}
        bg="bg-secondary"
        hoverBg="bg-secondary-hover"
        curve="sm"
      >
        <Text size="md-b">home.gists.seeMore</Text>
      </Link>
    </Div>
  );
};
