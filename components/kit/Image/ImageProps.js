import { Props as DivProps } from "@kits/Div/DivProps";

type Layout = "intrinsic" | "fixed" | "responsive" | "fill";
type Src =
  | String
  | {
      blurDataURL: String,
      src: String,
      height: Number,
      width: Number,
    };
type Placeholder = "blur" | "empty";

// just for intellisense
export interface Props extends DivProps {
  fit?: String;
  src: Src;
  hash: String;
  alt?: String;
  serverQuality?: String;
  placeholder?: Placeholder;
  blurDataURL?: String;
  quality?: Number;
  priority?: Boolean;
  unoptimized?: Boolean;
  objectPosition?: String;
  layout?: Layout;
  loader?: Function;
  withShimmer?: Boolean;
}
