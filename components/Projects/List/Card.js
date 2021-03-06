import React from "react";
import { Div, Image, Link, Text } from "@kits";

export const ProjectCard = (props) => {
  const { logo, slug } = props || {};

  const height = 120;

  return (
    <Link
      href={`/projects#project-${slug}`}
      prefetch={false}
      height={`${height}px`}
      flex={[, , "row"]}
      p="2"
      curve="sm"
      overflow="hidden"
      bg="bg-secondary"
      mw="min(330px, 100%)"
      hoverBg="bg-secondary-hover"
    >
      <Div
        height="100%"
        flex={["center", "center"]}
        mw={`calc(${height}px - 1rem)`}
        position="relative"
      >
        <Div
          position="relative"
          width="100%"
          height="100%"
          curve="sm"
          overflow="hidden"
        >
          <Image
            src={logo}
            placeholder="blur"
            blurDataURL={logo}
            quality={20}
            layout="fill"
            fit="contain"
          />
        </Div>
      </Div>
      <Div flexPortion="auto" ml="3">
        <Div flex={["start", "start", "column"]} height="100%">
          <Div mb="2" height="1.5rem">
            <Text size="lg-b" css={{ textTransform: "uppercase" }}>
              {`projects.${slug}.name`}
            </Text>
          </Div>
          <Div height="calc(100% - 2rem)">
            <Text
              tag="p"
              color="text-secondary"
              css={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {`projects.${slug}.description`}
            </Text>
          </Div>
        </Div>
        {/* <Div flex={["center", "between"]} width="100%" pt="3" border="border-light" borderSide="top"><Text color="text-secondary" size="xsm">{date}</Text></Div> */}
      </Div>
    </Link>
  );
};
