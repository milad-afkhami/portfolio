import React from "react";
import { Div } from "@kits";
import { BlogCard } from "./Card";
import { BlogCardLoadings } from "./Loading";
import { ORIENTATION } from "@constants";
import { PageTitle } from "@components/Layout";
import { BlogsMoreLink } from "./MoreLink";

export const Blogs = (props) => {
  const {
    items = [],
    loading,
    title,
    moreLink,
    loadingCount = 9,
    orientation = ORIENTATION.VERTICAL,
    ...rest
  } = props || {};

  return (
    <Div my="3" {...rest}>
      {title && <PageTitle title={title} tag="h2" />}
      {items?.length ? (
        <Div
          grid={["repeat(1, 1fr)", , "1rem", "1rem", "row"]}
          responsive={{
            sm: { css: { gridTemplateColumns: "repeat(2, 1fr)" } },
            lg: { css: { gridTemplateColumns: "repeat(3, 1fr)" } },
          }}
          overflowX="auto"
          thinScrollbar
          pb="2"
        >
          {items.map((post, i) => (
            <BlogCard key={i} {...post} />
          ))}
        </Div>
      ) : (
        <BlogCardLoadings count={loadingCount} />
      )}
      {items?.length && moreLink ? <BlogsMoreLink link={moreLink} /> : null}
    </Div>
  );
};
