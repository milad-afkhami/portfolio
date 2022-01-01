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

  // #temp
  const changeCardViewInResponsive = false;

  return (
    <Div my="3" {...rest}>
      {title && <PageTitle title={title} />}
      {items?.length ? (
        <Div
          grid={[
            // changeCardViewInResponsive ? "repeat(1, 1fr)" : "repeat(3, 1fr)",
            "repeat(1, 1fr)",
            ,
            "1rem",
            "1rem",
            "row",
          ]}
          responsive={{
            sm: { css: { gridTemplateColumns: "repeat(3, 1fr)" } }, // md: { css: { gridTemplateColumns: "repeat(3, 1fr)" } },
          }}
          overflowX="auto"
          pb="2"
        >
          {items.map((post, i) => (
            <BlogCard
              changeCardViewInResponsive={changeCardViewInResponsive}
              key={i}
              {...post}
            />
          ))}
        </Div>
      ) : (
        <BlogCardLoadings count={loadingCount} />
      )}
      {items?.length && moreLink ? <BlogsMoreLink link={moreLink} /> : null}
    </Div>
  );
};
