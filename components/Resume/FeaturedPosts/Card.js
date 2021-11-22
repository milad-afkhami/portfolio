import React from "react";
import { Div, Text, Image, Link } from "@kits";
import styled from "styled-components";

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
    <StyledLink
      href={`/blog/${slug}`}
      width="480px"
      height="200px"
      flex
      curve="sm"
      position="relative"
      overflow="hidden"
      // mb="3"
      bg="bg-secondary"
      hover={{
        "& > last-child": {
          width: "100%",
        },
      }}
    >
      <Div height="100%" width="160px" mw="160px" position="relative">
        <Image src={image} layout="fill" fit="cover" />
      </Div>
      <Div
        p="3"
        position="absolute"
        height="100%"
        dimensions={{ right: 0 }}
        width="calc(100% - 160px)"
        pace="fast"
        bg="bg-secondary-pale"
      >
        <Div flex={["start", "between", "column"]} height="100%">
          <Div
            border="border-light"
            borderSide="bottom"
            color="text-secondary"
            pb="2"
          >
            {category}
          </Div>
          <Div>
            <Div mb="2">
              <Text size="h-sm-b">{title}</Text>
            </Div>
            <Div>
              <Text color="text-secondary">
                {summary.slice(0, 70) + (summary.length > 70 ? " ..." : "")}
              </Text>
            </Div>
          </Div>
          <Div
            flex={["center", "between"]}
            width="100%"
            pt="3"
            border="border-light"
            borderSide="top"
          >
            <Div>
              <Text color="text-secondary">{publishedAt}</Text>
            </Div>
            <Div>
              <Text mx="1" color="text-secondary">
                {minutesToRead}
              </Text>
              {/* <Image src="/images/icons/time.svg" width="10px" height="10px" /> */}
            </Div>
          </Div>
        </Div>
      </Div>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  &:hover > :nth-child(2) {
    width: 100%;
  }
`;
