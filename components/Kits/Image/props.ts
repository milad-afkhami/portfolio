import type { DivProps } from "style-wiz";
import type { ImageProps as NextImageProps } from "next/image";
import type { CSSAttribute } from "goober";

export default interface ImageProps extends NextImageProps {
  fit?: CSSAttribute["objectFit"];
  hash?: string;
  withShimmer?: boolean;
  objectPosition?: string;
  styles?: DivProps["styles"];
}
