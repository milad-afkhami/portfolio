import { Div } from "style-wiz";
import BlogCard from "./Item";
import PageTitle from "@components/Layout/Title/Page";
import responsiveStyles from "@helpers/responsiveStyles";
import type { FC } from "react";
import type { IntRange } from "ts-wiz";

interface BlogCardsProps {
  items: IBlog[];
  headingLevel?: IntRange<1, 3>;
  // loading: string;
  // loadingCount: string;
  // orientation: string;
}

const BlogCards: FC<BlogCardsProps> = (props) => {
  const { items = [], headingLevel = 2 } = props;

  return (
    <Div mb="3">
      <PageTitle title="blog.title" tag={`h${headingLevel}`} />
      {items.length ? (
        <Div
          thinScrollbar
          overflowX="auto"
          mb="4"
          grid={["repeat(1, 1fr)", , "4", "4", "row"]}
          styles={{
            ...responsiveStyles("md", {
              gridTemplateColumns: "repeat(2, 1fr)",
            }),
            ...responsiveStyles("lg", {
              gridTemplateColumns: "repeat(3, 1fr)",
            }),
          }}
        >
          {items.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </Div>
      ) : null}
    </Div>
  );
};

export default BlogCards;
