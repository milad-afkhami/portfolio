import React from "react";
import { Div, Text, Image, Link } from "@kits";

export const GistCardCategory = (props) => {
  const { category = "" } = props || {};

  return (
    <Link
      href={{ pathname: "/gists", query: { category } }}
      hover={{ css: { filter: "brightness(0.7)" } }}
      curve="circle"
      overflow="hidden"
      height="48px"
      width="48px"
      position="relative"
    >
      <Image
        src={`/images/gists/${category}.png`}
        // alt={`gists.category.${category}`}
        layout="fill"
      />
      {/* <Div mb="1"></Div><Div><Text size="xsm">{`gists.category.${category}`}</Text></Div> */}
    </Link>
  );
};
