import React from "react";
import { Div, Text, Image, Link, Icon } from "@kits";
import { BlogCardCategory } from "./Category";

export const BlogCard = (props) => {
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
      prefetch={false}
      height={"300px"}
      flex={[, , "column"]}
      curve="sm"
      overflow="hidden"
      bg="bg-secondary"
      hoverBg="bg-secondary-hover"
      mw="280px"
      responsive={{
        sm: { flex: [, , "column"], height: "300px" },
        lg: { height: "340px" },
      }}
    >
      <Div
        height="100%"
        flexPortion={3}
        responsive={{ sm: { flexPortion: 3 } }}
        position="relative"
      >
        {image && (
          <Image
            src={image}
            placeholder="blur"
            blurDataURL={image}
            layout="fill"
            fit="cover"
          />
        )}
        <BlogCardCategory category={category} />
      </Div>
      <Div
        px="3"
        py="2"
        flexPortion={2}
        responsive={{ sm: { flexPortion: 2, py: 3 } }}
      >
        <Div flex={["start", "between", "column"]} height="100%">
          <Div>
            <Div mb="2">
              <Text size="lg-b" lineHeight="1.5">
                {title}
              </Text>
            </Div>
            {/* <Div><Text color="text-secondary" css={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }} >{summary}</Text></Div> */}
          </Div>
          <Div
            flex={["center", "between"]}
            width="100%"
            pt="2"
            responsive={{ md: { pt: 3 } }}
            border="border-light"
            borderSide="top"
          >
            <Div>
              <Text color="text-secondary" size="xsm">
                {publishedAt}
              </Text>
            </Div>
            <Div flex={["center", "center"]}>
              <Text mx="2" color="text-secondary" size="xsm">
                {minutesToRead}
              </Text>
              {/* <Text mx="2" color="text-secondary" size="xsm" translationVariables={{ time: minutesToRead }}>blog.meta.timeToReadValue</Text> */}
              <Icon name="time" color="text-secondary" size="sm" />
            </Div>
          </Div>
        </Div>
      </Div>
    </Link>
  );
};
