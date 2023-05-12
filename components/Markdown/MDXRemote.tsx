import { Div, Image } from "@kits";
import { MDXRemote as NextMDXRemote } from "next-mdx-remote";

const components = { Image, Div };

export const MDXRemote = function (props) {
  return (
    <NextMDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
};
