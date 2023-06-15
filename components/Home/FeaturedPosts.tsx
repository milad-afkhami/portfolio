import Div from "@kits/Div";
import BlogCards from "@components/Cards/Blog";
import { useTranslation } from "next-i18next";
import type { FC } from "react";

const homeBlogs = [
  // "data-fetching-pattern-preference",
  "one-on-one",
  "front-end-learning-roadmap",
  "rethink-using-redux",
  // "redux-clean-code",
  // "homophobia",

  // "multi-theme",
  // "typography",
  // "http-proxy",
];

interface FeaturedPostsProps {
  posts: Array<IBlog>;
}

const FeaturedPosts: FC<FeaturedPostsProps> = (props) => {
  const { posts } = props;

  const { t } = useTranslation("home");

  // const isMediumScreen = useMediaQuery({ minWidth: breakpoints.sm, maxWidth: breakpoints.md });

  // const items = posts.filter(({ slug }) => homeBlogs.includes(slug));
  const items = homeBlogs.map((slug) =>
    posts.find((post) => post.slug === slug)
  ) as Array<IBlog>;

  return (
    <Div my="4">
      <BlogCards items={items} title={t("posts.title")} moreLink="/blog" />
    </Div>
  );
};

export default FeaturedPosts;