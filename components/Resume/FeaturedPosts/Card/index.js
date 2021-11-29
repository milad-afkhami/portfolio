import React from "react";
import { Div, Text, Image, Link } from "@kits";
import { FeaturedPostCardCategory } from "./Category";

export const FeaturedPostCard = (props) => {
  const {
    _id = "",
    title = "",
    views = "",
    image = "",
    body = "",
    publishedAt = "",
    readingTime = "",
    slug = "",
    category = "",
    summary = "",
    minutesToRead = 0,
  } = props || {};

  return (
    <Link
      href={`/blog/${slug}`}
      height="420px"
      flex={[, , "column"]}
      curve="sm"
      overflow="hidden"
      bg="bg-secondary"
      hoverBg="bg-secondary-hover"
    >
      <Div height="100%" flexPortion="1" position="relative">
        <Image
          src={image}
          placeholder="blur"
          blurDataURL={image}
          layout="fill"
          fit="cover"
        />
        <FeaturedPostCardCategory category={category} />
      </Div>
      <Div p="3" flexPortion="1">
        <Div flex={["start", "between", "column"]} height="100%">
          <Div>
            <Div mb="2">
              <Text size="md-b" css={{ lineHeight: "1.5" }}>
                {title}
              </Text>
            </Div>
            {/* <Div>
              <Text color="text-secondary">
                {summary.slice(0, 70) + (summary.length > 70 ? " ..." : "")}
              </Text>
            </Div> */}
          </Div>
          <Div
            flex={["center", "between"]}
            width="100%"
            pt="3"
            border="border-light"
            borderSide="top"
          >
            <Div>
              <Text color="text-secondary" size="xsm">
                {publishedAt}
              </Text>
            </Div>
            <Div>
              <Text mx="1" color="text-secondary" size="xsm">
                {minutesToRead}
              </Text>
              {/* <Image src="/images/icons/time.svg" width="10px" height="10px" /> */}
            </Div>
          </Div>
        </Div>
      </Div>
    </Link>
  );
};
