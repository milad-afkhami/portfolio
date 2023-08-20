import { Div } from "style-wiz";
import Link from "@kits/Link";
import Button from "@kits/Button";
import BlogCards from "@components/Cards/Blog";
import { useTranslation } from "next-i18next";
import type { FC } from "react";

const homeBlogs = [
  "one-on-one",
  "front-end-learning-roadmap",
  "the-ideal-team-player-patrick-lencioni",
  "five-dysfunctions-of-a-team-patrick-lencioni",
  "adr",
  "data-fetching-pattern-preference",
  // "rethink-using-redux",
  // "build-time-data-caching-in-next-js",
  // "redux-clean-code",
  // "homophobia",
];

interface FeaturedPostsProps {
  posts: IBlog[];
}

const HomeBlogs: FC<FeaturedPostsProps> = (props) => {
  const { posts } = props;

  // const isMediumScreen = useMediaQuery({ minWidth: breakpoints.sm, maxWidth: breakpoints.md });

  // const items = posts.filter(({ slug }) => homeBlogs.includes(slug));
  const items = homeBlogs.map((slug) =>
    posts.find((post) => post.slug === slug)
  ) as IBlog[];

  return (
    <Div my="4">
      <BlogCards items={items} headingLevel={2} />
      <Link href="/blog" width="100%">
        <Button text="posts.seeMore" ns="home" block variant="outlined" />
      </Link>
    </Div>
  );
};

export default HomeBlogs;
