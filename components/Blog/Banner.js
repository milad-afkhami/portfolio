import React from "react";
import { Div, Image } from "@kits";

export const BlogBanner = (props) => {
  const { banner, title } = props || {};

  if (!banner) return null;

  return (
    <Div
      position="relative"
      height="min(70vw, 600px)"
      width="100%"
      curve="sm"
      overflow="hidden"
      my="4"
    >
      <Image
        alt={title}
        src={banner}
        layout="fill"
        fit="cover"
        placeholder="blur"
        blurDataURL={banner}
        quality={100}
        priority
        maximizable
      />
    </Div>
  );
};
