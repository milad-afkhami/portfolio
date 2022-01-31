import React from "react";
import { Div } from "@kits";
import { Blogs } from "@components/Blog";
import { ORIENTATION } from "@constants";
import { useMediaQuery } from "@hooks";
import { breakpoints } from "@stylesheets";

export const FeaturedPosts = (props) => {
  const { posts } = props || {};
  // const { data, isValidating, mutate, error } = useBlogs();

  const isMediumScreen = useMediaQuery({
    minWidth: breakpoints.sm,
    maxWidth: breakpoints.md,
  });

  return (
    <Div my="4">
      <Blogs
        orientation={ORIENTATION.HORIZONTAL}
        items={posts?.slice?.(0, isMediumScreen ? 2 : 3)}
        title="home.posts.title"
        moreLink="/blog"
      />
    </Div>
  );
};
