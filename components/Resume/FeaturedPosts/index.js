import React from "react";
import { Div, Link, Text } from "@kits";
import { Blogs, FeaturedPostCard } from "@components/Blog";
import { blogs } from "mock";
import { useBlogs } from "@hooks";

export const FeaturedPosts = (props) => {
  const { posts } = props || {};

  // const { data, isValidating, mutate, error } = useBlogs();

  return (
    <Div my="5">
      <Blogs
        items={posts?.slice?.(0, 6)}
        title="resume.posts.title"
        moreLink="/blog"
      />
    </Div>
  );
};
