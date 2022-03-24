import React from "react";
import { Div, Text } from "@kits";
import { __range } from "@utils";
import { useTranslation } from "@hooks";
import { isDevelopment } from "@config";

export const WhoAmI = (props) => {
  const {} = props || {};

  const t = useTranslation().t;

  const paragraphsCount = 7;

  return (
    <Div mt="4">
      <Div>
        <Div
          as="video"
          width="min(100%, 600px)"
          curve="sm"
          border="border-light"
          poster="/images/intro-poster.png"
          controls
          mb="2"
          responsive={{ sm: { ml: 3, mb: 0, css: { float: "right" } } }}
          preload={false}
          muted={isDevelopment}
        >
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Div>
        {__range(paragraphsCount).map((i) => (
          <Text size="lg" tag="p" mb="1" align="justify">
            {t(`about.p${i + 1}`)}
          </Text>
        ))}
        <Div as="br" css={{ clear: "both" }} />
      </Div>
    </Div>
  );
};
