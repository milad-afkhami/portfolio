import React from "react";
import { Div, Link, Text } from "@kits";
import { Blogs, FeaturedPostCard } from "@components/Blog";
import { blogs } from "mock";
import { useBlogs } from "@hooks";
import { ORIENTATION } from "@constants";

export const FeaturedPosts = (props) => {
  const { posts } = props || {};

  // const { data, isValidating, mutate, error } = useBlogs();

  return (
    <Div my="4">
      <Blogs
        orientation={ORIENTATION.HORIZONTAL}
        items={posts?.slice?.(0, 3)}
        title="home.posts.title"
        moreLink="/blog"
      />
    </Div>
  );
};
