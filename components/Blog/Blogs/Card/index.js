import React from "react";
import { Div, Image, Link } from "@kits";
import { BlogCardCategory } from "./Category";
import { BlogCardBody } from "./Body";
import { BlogCardFooter } from "./Footer";

export const BlogCard = (props) => {
  const { image = "", slug = "" } = props || {};

  return (
    <Link
      href={`/blog/${slug}`}
      prefetch={false}
      height={"300px"}
      flex={[, , "column"]}
      curve="sm"
      overflow="hidden"
      bg="bg-secondary"
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
          />
        )}
        <BlogCardCategory {...props} />
      </Div>
      <Div
        px="0.75rem"
        py="2"
        flexPortion={3}
        responsive={{ sm: { /*flexPortion: 3,*/ py: "0.75rem" } }}
      >
        <Div flex={["start", "between", "column"]} height="100%">
          <BlogCardBody {...props} />
          <BlogCardFooter {...props} />
        </Div>
      </Div>
    </Link>
  );
};
