import Div from "@kits/Div";
import Blogs from "@components/Blog";
import Orientations from "@constants/orientations";
import { useMediaQuery } from "react-responsive";
import breakpoints from "@stylesheets/breakpoints";

const homeBlogs = [
  "data-fetching-pattern-preference",
  "rethink-using-redux",
  "redux-clean-code",
  // "homophobia",

  // "multi-theme",
  // "typography",
  // "http-proxy",
];

const FeaturedPosts = (props) => {
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
        orientation={Orientations.Horizontal}
        items={posts?.slice?.(0, isMediumScreen ? 2 : 3)}
        title="home.posts.title"
        moreLink="/blog"
      />
    </Div>
  );
};

export default FeaturedPosts;
