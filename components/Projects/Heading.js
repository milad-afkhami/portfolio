import React from "react";
import { Div, Image, Link, Text } from "@kits";

export const ProjectHeading = (props) => {
  const { logo, name, link = "", index } = props || {};

  return (
    <Div
      flex={["center", "between"]}
      py="3"
      mb="4"
      border="border-light"
      borderSide="bottom"
    >
      <Div flex={["center", "start"]}>
        <Text size="h-lg-b">{`${index}.`}</Text>
        <Div mx="2">
          <Text size="h-md-b" as="h2">
            {name}
          </Text>
        </Div>
        <Div flex={["center", "center"]} curve="circle" overflow="hidden">
          <Image
            src={logo}
            width="32px"
            height="32px"
            placeholder="blur"
            withShimmer
          />
        </Div>
      </Div>
      {Array.isArray(link) ? (
        <Div flex={["center", "end"]}>
          {link.map((item, i) => (
            <>
              <Link href={item} outerLink underline>
                <Text size="sm">
                  {item.replace("https://", "").replace("www.", "")}
                </Text>
              </Link>
              {link[i + 1] ? (
                <Div mx="1">
                  <Text size="md" noTranslation>
                    ,
                  </Text>
                </Div>
              ) : null}
            </>
          ))}
        </Div>
      ) : (
        <Link href={link} outerLink underline>
          <Text size="sm">
            {link.replace("https://", "").replace("www.", "")}
          </Text>
        </Link>
      )}
    </Div>
  );
};
