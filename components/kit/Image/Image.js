import React, { ComponentType } from "react";
// import { LazyImage } from "react-lazy-images";
import { Props } from "./ImageProps";
import { Div } from "@kits";
import NextImage from "next/image";
import { ImageHelper } from "@helpers";

export const Image: ComponentType<Props> = ({
  fit,
  src,
  hash,
  alt = "",
  placeholder,
  blurDataURL,
  loader,
  quality = 75,
  width,
  serverQuality = "original",
  height,
  priority = false,
  unoptimized = false,
  objectPosition,
  withShimmer,
  layout,
  css = {},
  ...rest
}) => {
  return (
    <Div
      as={NextImage}
      src={hash ? ImageHelper.getImage(hash, serverQuality) : src}
      alt={alt}
      quality={quality}
      priority={priority}
      loader={loader}
      unoptimized={unoptimized}
      objectPosition={objectPosition}
      placeholder={placeholder}
      width={width}
      height={height}
      layout={layout}
      blurDataURL={
        placeholder === "blur" && withShimmer
          ? `data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`
          : blurDataURL
      }
      css={{
        userSelect: css.userSelect || "none",
        "-webkit-user-drag": "none",
        objectFit: fit || "unset",
      }}
      {...rest}
    />
  );
};

function shimmer(w, h) {
  return `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>
  `;
}

function toBase64(str) {
  return typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
}
