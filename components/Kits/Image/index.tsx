import Div from "@kits/Div";
import NextImage, {
  type ImageProps as NextImageProps,
} from "next/legacy/image";
import type { FC } from "react";
import type ImageProps from "./props";

type ShimmerSize = number | string;

function shimmer(w: ShimmerSize, h: ShimmerSize) {
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

function toBase64(str: string) {
  return typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
}

/** @component Renders an enhanced img element using [next.js's future image](https://nextjs.org/docs/api-reference/next/future/image) */
const Image: FC<ImageProps> = (props) => {
  const {
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
    fill,
    css = {},
    onClick,
    sizes,
    ...rest
  } = props;

  return (
    <Div
      // todo: nested components
      // eslint-disable-next-line react/no-unstable-nested-components
      as={(_props: NextImageProps) => (
        <NextImage {..._props} sizes={sizes} width={width} height={height} />
      )}
      // @ts-ignore
      src={src}
      alt={alt}
      quality={quality}
      priority={priority}
      loader={loader}
      unoptimized={unoptimized}
      placeholder={placeholder}
      fill={fill}
      blurDataURL={
        placeholder === "blur" && withShimmer
          ? `data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`
          : blurDataURL
      }
      css={{
        userSelect: css.userSelect || "none",
        "-webkit-user-drag": "none",
        objectFit: fit || "unset",
        ...css,
      }}
      // onClick={(e) => onClick?.(e)}
      {...rest}
    />
  );
};

export default Image;
