import { Div } from "style-wiz";
import BlogCard from "./Item";
import PageTitle from "@components/Layout/Title/Page";
import BlogCardsMoreLink from "./MoreLink";
import BlogCardsWrapper from "./Wrapper";
import type { FC } from "react";

interface BlogCardsProps {
  items: IBlog[];
  title?: string;
  moreLink?: string;
  // loading: string;
  // loadingCount: string;
  // orientation: string;
}

const BlogCards: FC<BlogCardsProps> = (props) => {
  const { items = [], title, moreLink } = props;

  return (
    <Div my="3">
      {title && <PageTitle title={title} tag="h2" />}
      {items.length ? (
        <BlogCardsWrapper>
          {items.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </BlogCardsWrapper>
      ) : null}
      {items.length && moreLink ? <BlogCardsMoreLink link={moreLink} /> : null}
    </Div>
  );
};

export default BlogCards;
