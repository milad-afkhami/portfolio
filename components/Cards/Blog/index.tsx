import Div from "@kits/Div";
import BlogCard from "./Item";
// import BlogCardLoadings from "./Loading";
import Orientations from "@constants/orientations";
import PageTitle from "@components/Layout/Title/Page";
import BlogCardsMoreLink from "./MoreLink";
import BlogCardsWrapper from "./Wrapper";

const BlogCards = (props) => {
  const {
    items = [],
    loading,
    title,
    moreLink,
    loadingCount = 9,
    orientation = Orientations.Vertical,
    ...rest
  } = props || {};

  return (
    <Div my="3" {...rest}>
      {title && <PageTitle title={title} tag="h2" />}
      {items?.length ? (
        <BlogCardsWrapper>
          {items.map((post, i) => (
            <BlogCard key={i} {...post} />
          ))}
        </BlogCardsWrapper>
      ) : null}
      {items?.length && moreLink ? <BlogCardsMoreLink link={moreLink} /> : null}
    </Div>
  );
};

export default BlogCards;
