import React from "react";
import { Div } from "@kits";
import { Blogs } from "@components/Blog";
import { ORIENTATION } from "@constants";
import { useMediaQuery } from "@hooks";
import { breakpoints } from "@stylesheets";

const homeBlogs = [
  "data-fetching-pattern-preference",
  "rethink-using-redux",
  "homophobia",

  // "redux-clean-code",
  // "multi-theme",
  // "typography",
  // "http-proxy",
];

export const FeaturedPosts = (props) => {
  // const { data, isValidating, mutate, error } = useBlogs();

  const isMediumScreen = useMediaQuery({
    minWidth: breakpoints.sm,
    maxWidth: breakpoints.md,
  });

  const posts = homeBlogs.map((slug) =>
    props.posts.find((it) => it.slug === slug)
  );

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
