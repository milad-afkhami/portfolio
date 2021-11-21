import React from "react";
import { Div, Text } from "@kits";
import { FeaturedPostCard } from "./Card";

export const FeaturedPosts = (props) => {
  const { posts = [] } = props || {};

  return (
    <Div my="5">
      <Div>
        <Text size="h-md">resume.posts.title</Text>
      </Div>
      {posts.map((post, i) => (
        <FeaturedPostCard key={i} {...post} />
      ))}
    </Div>
  );
};
