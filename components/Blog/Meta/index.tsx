import Div from "@kits/Div";
import BlogMetaItem from "./Item";
import useTranslation from "@hooks/useTranslation";

const BlogMeta = (props) => {
  const { category, readingTime, publishedAt } = props || {};

  const { t } = useTranslation();

  return (
    <Div
      curve="sm"
      grid={["repeat(1, 1fr)", , "4", "3", "row"]}
      responsive={{ sm: { css: { gridTemplateColumns: "repeat(3, 1fr)" } } }}
    >
      <BlogMetaItem
        label="blog.meta.category"
        value={`blog.category.${category}`}
      />
      <BlogMetaItem
        label="blog.meta.timeToReadLabel"
        value={t("blog.meta.timeToReadValue", { time: readingTime })}
      />
      <BlogMetaItem label="blog.meta.publishedAt" value={publishedAt} />
    </Div>
  );
};

export default BlogMeta;
