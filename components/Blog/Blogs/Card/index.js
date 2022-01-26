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
    slug = "",
    category = "",
    summary = "",
    readingTime,
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
        <BlogCardCategory category={category} />
      </Div>
      <Div
        px="0.75rem"
        py="2"
        flexPortion={3}
        responsive={{ sm: { /*flexPortion: 3,*/ py: "0.75rem" } }}
      >
        <Div flex={["start", "between", "column"]} height="100%">
          <Div>
            <Div mb="2">
              <Text
                tag="p"
                size="md-b"
                lineHeight="1.5"
                truncate
                css={{
                  whiteSpace: "pre-wrap",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  lineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {title}
              </Text>
            </Div>
            {/* <Div><Text color="text-secondary" css={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }} >{summary}</Text></Div> */}
          </Div>
          <Div
            flex={["center", "between"]}
            width="100%"
            pt="2"
            responsive={{ md: { pt: "0.75rem" } }}
            border="border-light"
            borderSide="top"
          >
            <Div>
              <Text color="text-secondary" size="xsm" tag="time">
                {publishedAt}
              </Text>
            </Div>
            {readingTime ? (
              <Div flex={["center", "center"]}>
                <Text
                  mx="2"
                  color="text-secondary"
                  size="xsm"
                  translationVariables={{ time: readingTime }}
                  css={{ letterSpacing: "normal" }}
                >
                  blog.meta.timeToReadValueAbbr
                </Text>
                {/* <Text mx="2" color="text-secondary" size="xsm" translationVariables={{ time: readingTime }}>blog.meta.timeToReadValue</Text> */}
                <Icon name="time" color="text-secondary" size="sm" />
              </Div>
            ) : null}
          </Div>
        </Div>
      </Div>
    </Link>
  );
};
