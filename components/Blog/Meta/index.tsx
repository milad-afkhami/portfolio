import { Div } from "style-wiz";
import BlogMetaItem from "./Item";
import { useTranslation } from "next-i18next";
import responsiveStyles from "@helpers/responsiveStyles";
import type { FC } from "react";

interface BlogMetaProps {
  category: string;
  readingTime: string;
  publishedAt: string;
}

const BlogMeta: FC<BlogMetaProps> = (props) => {
  const { category, readingTime, publishedAt } = props;
  const [t] = useTranslation();

  return (
    <Div
      curve="sm"
      grid={["repeat(1, 1fr)", , "4", "3", "row"]}
      styles={responsiveStyles("sm", { gridTemplateColumns: "repeat(3, 1fr)" })}
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
