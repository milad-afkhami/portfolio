import React from "react";
import { Div, Text, Image, Link } from "@kits";
import { GistCardCategory } from "./Category";

export const GistCard = (props) => {
  const {
    _id = "",
    title = "",
    summary = "",
    image = "",
    body = "",
    slug = "",
    category = "",
  } = props || {};

  return (
    <Link
      href={`/gist/${slug}`}
      prefetch={false}
      height="200px"
      curve="sm"
      overflow="hidden"
      bg="bg-secondary"
      hoverBg="bg-secondary-hover"
      position="relative"
      p="3"
    >
      <Div height="3rem" flex={["center", "between"]} mb="2">
        <Div>
          <Text size="h-sm-b">{title}</Text>
        </Div>
        <GistCardCategory category={category} />
      </Div>
      <Div>
        <Text tag="p" size="md" color="text-secondary">
          {summary}
        </Text>
      </Div>
    </Link>
  );
};
