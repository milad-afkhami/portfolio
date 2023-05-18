import Div from "@kits/Div";
import BlogCards from "@components/Cards/Blog";
import { useMediaQuery } from "react-responsive";
import breakpoints from "@stylesheets/constants/breakpoints.json";
import type { FC } from "react";

const homeBlogs = [
  "data-fetching-pattern-preference",
  "rethink-using-redux",
  "redux-clean-code",
  // "homophobia",

  // "multi-theme",
  // "typography",
  // "http-proxy",
];

interface FeaturedPostsProps {
  posts: Array<IBlog>;
}

const FeaturedPosts: FC<FeaturedPostsProps> = ({ posts }) => {
  const isMediumScreen = useMediaQuery({
    minWidth: breakpoints.sm,
    maxWidth: breakpoints.md,
  });

  const items = posts.filter(({ slug }) => homeBlogs.includes(slug));

  return (
    <Div my="4">
      <BlogCards
        items={items?.slice?.(0, isMediumScreen ? 2 : 3)}
        title="home.posts.title"
        moreLink="/blog"
      />
    </Div>
  );
};

export default FeaturedPosts;
