import Div from "@kits/Div";
import NextImage, {
  type ImageProps as NextImageProps,
} from "next/legacy/image";
import ImageHelper from "@helpers/image";
import type { FC } from "react";
import type ImageProps from "./props";

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
          ? ImageHelper.getShimmerURL()
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
