import React from "react";
import { Div } from "@kits";
import { Blogs } from "@components/Blog";
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
