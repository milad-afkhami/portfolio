import React from "react";
import { Div, Link, Text } from "@kits";
import { Blogs, FeaturedPostCard } from "@components/Blog";
import { blogs } from "mock";

export const FeaturedPosts = (props) => {
  const {} = props || {};

  return (
    <Div my="5">
      <Blogs
        items={blogs.slice(0, 6)}
        title="resume.posts.title"
        moreLink="/blog"
      />
    </Div>
  );
};
