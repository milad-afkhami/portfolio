import React from "react";
import { Div, Image, Text } from "@kits";
import { toast } from "@utils";
import { useTranslation } from "@hooks";
import { THEMES } from "@constants";

export function ContactOption(props) {
  const { type, label, value } = props || {};

  const t = useTranslation().t;

  const onClickContactWay = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => toast("layout.message.textCopied", { type: "success" }))
      .catch(() => toast("layout.message.error.something", { type: "error" }));
  };

  return (
    <Div
      flex={["center", , "column"]}
      Mw="100%"
      overflow="hidden"
      onClick={onClickContactWay}
      cursor="pointer"
    >
      <Div
        bg="brand"
        hoverBg="brand-hover"
        curve="circle"
        width="100px"
        height="100px"
        flex={["center", "center"]}
        position="relative"
        mb="3"
        // responsive={{ md: { width: "100px", height: "100px" } }}
      >
        <Image
          src={`/images/icons/contact/${type}.png`}
          css={{
            filter: "invert(0.1)",
            [`[data-theme="${THEMES.LIGHT}"] &`]: {
              filter: "invert(1)",
            },
          }}
          width="50px"
          height="50px"
          fit="contain"
        />
      </Div>
      <Div mb="2">
        <Text color="brand" size="lg-b" css={{ textTransform: "capitalize" }}>
          {`contact.${type}`}
        </Text>
      </Div>
      <Div
        flex={["center", "center"]}
        Mw="80%"
        hover={{ css: { textDecoration: "underline" } }}
        color="brand-light"
      >
        <Text color="brand-light" size="sm" Mw="100%" truncate>
          {label || value}
        </Text>
      </Div>
    </Div>
  );
}
