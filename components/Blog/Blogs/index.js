import React from "react";
import { Div, Link, Text } from "@kits";
import { BlogCard } from "./Card";
import { __range } from "@utils";
import { BlogCardLoadings } from "./Loading";
import { ORIENTATION } from "@constants";
import { PageTitle } from "@components/Layout";

export const Blogs = (props) => {
  const {
    items = [],
    loading,
    title,
    moreLink,
    onClickMore,
    loadingCount = 9,
    orientation = ORIENTATION.VERTICAL,
    ...rest
  } = props || {};

  return (
    <Div my="3" {...rest}>
      {title && <PageTitle title={title} />}
      {items?.length ? (
        <Div
          grid={["repeat(1, 1fr)", , "1rem", "1rem"]}
          css={{ gridAutoFlow: "row" }}
          responsive={{
            sm: { css: { gridTemplateColumns: "repeat(2, 1fr)" } },
            lg: { css: { gridTemplateColumns: "repeat(3, 1fr)" } },
          }}
        >
          {items.map((post, i) => (
            <BlogCard key={i} {...post} />
          ))}
        </Div>
      ) : (
        <BlogCardLoadings count={loadingCount} />
      )}
      {items?.length && (moreLink || onClickMore) ? (
        <Div mt="3">
          {moreLink ? (
            <Link
              href={moreLink}
              width="100%"
              height="3rem"
              flex={["center", "center"]}
              bg="bg-secondary"
              hoverBg="bg-secondary-hover"
              curve="sm"
            >
              <Text>home.posts.seeMore</Text>
            </Link>
          ) : onClickMore ? (
            <Div
              onClick={onClickMore}
              width="100%"
              height="3rem"
              flex={["center", "center"]}
              bg="bg-secondary"
              hoverBg="bg-secondary-hover"
              curve="sm"
            >
              <Text>home.posts.seeMore</Text>
            </Div>
          ) : null}
        </Div>
      ) : null}
    </Div>
  );
};
