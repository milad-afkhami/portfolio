import Div from "@kits/Div";
import Image from "@kits/Image";
import Link from "@kits/Link";
import BlogCardCategory from "./Category";
import BlogCardBody from "./Body";
import BlogCardFooter from "./Footer";
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
      // mw="280px"
      responsive={{
        sm: { flex: [, , "column"], height: "300px" },
        lg: { height: "340px" },
      }}
    >
      <Div
        height="100%"
        flexPortion={5}
        // responsive={{ sm: { flexPortion: 4 } }}
        position="relative"
      >
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
      <Div px="3" py="2" flexPortion={3} responsive={{ sm: { py: "3" } }}>
        <Div flex={["start", "between", "column"]} height="100%">
          <BlogCardBody {...props} />
          <BlogCardFooter {...props} />
        </Div>
      </Div>
    </Link>
  );
};

export default BlogCard;
