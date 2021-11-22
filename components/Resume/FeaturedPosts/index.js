import React from "react";
import { Div, Text } from "@kits";
import { FeaturedPostCard } from "./Card";

export const FeaturedPosts = (props) => {
  const { posts = [] } = props || {};

  return (
    <Div my="5">
      <Div mb="4">
        <Text size="h-md-b">resume.posts.title</Text>
      </Div>
      <Div
        grid={["", "1fr 1fr", "1rem", "1rem"]}
        css={{ gridAutoFlow: "column" }}
        overflowY="hidden"
        overflowX="auto"
        Mh="calc(400px + 2rem)"
        pb="3"
        after={{
          content: `\"\"`,
          bg: `linear-gradient(-90deg, #333, transparent)`,
          width: "3rem",
          height: "100%",
          position: "absolute",
          right: 0,
        }}
      >
        {posts.map((post, i) => (
          <FeaturedPostCard key={i} {...post} />
        ))}
      </Div>
    </Div>
  );
};
