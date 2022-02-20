import React from "react";
import { Div, Icon, Text } from "@kits";
import { Trans } from "react-i18next";
import { appBaseURL } from "@config";

export const ResumeReference = (props) => {
  const { i18nKey, route } = props || {};
  return (
    <Div flex={["center", "start"]}>
      <Icon name="info" />
      <Div mx="1">
        <Text noTranslation size="sm" tag="p" css={{ lineHeight: "1.5" }}>
          <Trans
            i18nKey={i18nKey}
            components={{
              a: (
                <Text
                  href={`${appBaseURL}${route}`}
                  target="_blank"
                  tag="a"
                  color="brand"
                  hoverColor="brand-hover"
                  noTranslation
                  size="sm-b"
                  // className="mili-link1-icon"
                  css={{
                    ":after": { content: `\"\\e907\"`, fontFamily: "icomoon" },
                  }}
                />
              ),
            }}
          />
        </Text>
      </Div>
    </Div>
  );
};
