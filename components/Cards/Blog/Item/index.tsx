import { Div } from "style-wiz";
import Image from "@kits/Image";
import Link from "@kits/Link";
import BlogCardCategory from "./Category";
import BlogCardBody from "./Body";
import BlogCardFooter from "./Footer";
import responsiveStyles from "@helpers/responsiveStyles";
import type { FC } from "react";

const BlogCard: FC<IBlog> = (props) => {
  const { image = "", slug = "", title } = props;

  return (
    <Link
      href={`/blog/${slug}`}
      prefetch={false}
      height="300px"
      flex={[, , "column"]}
      curve="sm"
      overflow="hidden"
      bg="bg-secondary-main"
      hoverBg="bg-secondary-hover"
      styles={Object.assign(
        responsiveStyles("sm", { height: "300px" }),
        responsiveStyles("lg", { height: "340px" })
      )}
    >
      <Div height="100%" flexPortion={5} position="relative">
        {image && (
          <Image
            src={image}
            placeholder="blur"
            blurDataURL={image}
            layout="fill"
            quality={20}
            fit="cover"
            alt={title}
          />
        )}
        <BlogCardCategory {...props} />
      </Div>
      <Div
        px="3"
        py="2"
        flex={["flex-start", "space-between", "column"]}
        height="100%"
        flexPortion={3}
        styles={{
          ...responsiveStyles("sm", {
            paddingTop: "var(--spacing-3)",
            paddingBottom: "var(--spacing-3)",
          }),
        }}
      >
        <BlogCardBody {...props} />
        <BlogCardFooter {...props} />
      </Div>
    </Link>
  );
};

export default BlogCard;
