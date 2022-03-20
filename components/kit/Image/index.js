import React from "react";
import { Div } from "@kits";
import NextImage from "next/image";
import { useToggle } from "@hooks";
import { isomorphicPortal } from "@utils";

/**
 * @typedef {("intrinsic" | "fixed" | "responsive" | "fill")} Layout
 * @typedef {("blur" | "empty")} Placeholder
 * @typedef {{layout:Layout, fit:string, src:string, hash:string, alt:string, placeholder:Placeholder, blurDataURL:string, quality:number, priority:boolean, unoptimized:boolean, withShimmer:boolean, objectPosition:string, loader:Function}} ImageProps
 *
 * Renders an enhanced img element
 * @param {import("@kits/Div/Props").Props & ImageProps} props
 */
export const Image = ({
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

  let _src = src;

  if (src?.startsWith?.("/")) {
    _src = `https://2q23wr5n.tinifycdn.com${src}`;
  }

  return (
    <>
      <Div
        as={NextImage}
        src={_src}
        alt={alt}
        quality={quality}
        priority={priority}
        // loader={({ src }) => {
        //   try {
        //     new URL(src);
        //     return src;
        //   } catch (error) {
        //     return `https://2q23wr5n.tinifycdn.com${src}`;
        //   }
        // }}
        unoptimized={true}
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
        ? isomorphicPortal(
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
                height="min(1000px, 80vmin)"
                width="min(1000px, 80vmin)"
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
                    fit="contain"
                    priority
                    src={src}
                    withShimmer
                    placeholder="blur"
                    // withShimmer={!blurDataURL}
                    // {...(blurDataURL ? { blurDataURL } : {})}
                  />
                )}
              </Div>
            </Div>
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
