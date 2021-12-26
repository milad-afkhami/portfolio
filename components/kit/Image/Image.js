import React, { ComponentType } from "react";
import { Props } from "./ImageProps";
import { Div } from "@kits";
import NextImage from "next/image";
import { useIsomorphicPortal, useToggle } from "@hooks";

export const Image: ComponentType<Props> = ({
  fit,
  src,
  alt = "",
  placeholder,
  blurDataURL,
  loader,
  quality = 75,
  width,
  height,
  priority = false,
  unoptimized = false,
  objectPosition,
  withShimmer,
  layout,
  css = {},
  maximizable,
  onClick,
  cursor,
  ...rest
}) => {
  const [maximized, toggleMaximized] = useToggle(false);

  return (
    <>
      <Div
        as={NextImage}
        src={src}
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
        onClick={(e) => {
          if (maximizable) {
            e.preventDefault();
            e.stopPropagation();
            toggleMaximized?.();
          }
          return onClick?.(e);
        }}
        cursor={cursor ?? (maximizable ? "zoom-in" : undefined)}
        {...rest}
      />
      {maximizable && maximized
        ? useIsomorphicPortal(
            <Div
              width="calc(100vw - var(--scrollbar-width))"
              height="100vh"
              blurBg
              dimensions={{ top: 0, left: 0, right: 0, bottom: 0 }}
              zIndex="var(--overlay-z-index)"
              pace="xFast"
              flex={["center", "center"]}
              position="fixed"
              onClick={toggleMaximized}
              cursor="zoom-out"
            >
              <Div
                height="min(600px, 80vmin)"
                width="min(600px, 80vmin)"
                position="relative"
                cursor="default"
                opacity="1"
                pace="xFast"
              >
                {maximized && (
                  <Image
                    curve="sm"
                    onClick={toggleMaximized}
                    quality={100}
                    layout="fill"
                    priority
                    src={src}
                    withShimmer
                    placeholder="blur"
                    // withShimmer={!blurDataURL}
                    // {...(blurDataURL ? { blurDataURL } : {})}
                  />
                )}
              </Div>
            </Div>,
            "body"
          )
        : null}
    </>
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
