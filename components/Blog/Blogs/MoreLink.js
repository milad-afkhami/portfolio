import React from "react";
import { Div, Link, Text } from "@kits";

export const BlogsMoreLink = (props) => {
  const { link } = props || {};

  return (
    <Div mt="2">
      <Link
        href={link}
        width="100%"
        height="3rem"
        flex={["center", "center"]}
        bg="bg-secondary"
        hoverBg="bg-secondary-hover"
        curve="sm"
      >
        <Text size="md-b">home.posts.seeMore</Text>
      </Link>
    </Div>
  );
};
