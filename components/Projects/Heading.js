import React from "react";
import { Div, Link, Text } from "@kits";

export const ProjectHeading = (props) => {
  const { name, link = "", index } = props || {};

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
        <Text size="h-md-b" mx="2" as="h2">
          {name}
        </Text>
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
