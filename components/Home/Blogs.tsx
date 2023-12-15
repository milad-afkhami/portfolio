import { Div } from "style-wiz";
import Link from "@kits/Link";
import Button from "@kits/Button";
import BlogCards from "@components/Cards/Blog";
import type { FC } from "react";

const homeBlogs = [
  "the-ideal-team-player-patrick-lencioni",
  "one-on-one",
  "adr",
  "how-to-create-a-standard-merge-request-description-template",
  "front-end-learning-roadmap",
  "http-proxy",
  // "five-dysfunctions-of-a-team-patrick-lencioni",
  // "speed-up-your-programming-with-vscode-snippets-and-shortcuts",
  // "homophobia",
  // "build-time-data-caching-in-next-js",
  // "i-bet-you-dont-know-these-sass-features",
  // "data-fetching-pattern-preference",
  // "rethink-using-redux",
  // "redux-clean-code",
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
