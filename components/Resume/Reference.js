import React from "react";
import { Div, Icon, Text } from "@kits";
import { Trans } from "react-i18next";
import { appBaseURL } from "@config";

export const ResumeReference = (props) => {
  const { i18nKey, route, link } = props || {};
  return (
    <Div flex={["center", "start"]} my="3">
      <Icon name="info" size="sm" color="assistive-warning" />
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
                  css={
                    {
                      // ":after": { content: `\"\\e907\"`, fontFamily: "icomoon" },
                      // ":after": { content: "attr(href)" },
                      // ":after": { content: `\"${link}\"` },
                    }
                  }
                />
              ),
            }}
          />
          <Text
            href={`https://${link}`}
            target="_blank"
            tag="a"
            color="brand"
            hoverColor="brand-hover"
            noTranslation
            size="sm-b"
          >
            {link}
          </Text>
        </Text>
      </Div>
    </Div>
  );
};
