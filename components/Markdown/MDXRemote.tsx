import Div from "@kits/Div";
import Image from "@kits/Image";
import { MDXRemote as NextMDXRemote } from "next-mdx-remote";
import type { ReactNode } from "react";

const defaultComponents: Parameters<typeof NextMDXRemote>[0]["components"] = {
  Div: Div as unknown as ReactNode,
  Image: Image as unknown as ReactNode,
};

const MDXRemote = function (props: Parameters<typeof NextMDXRemote>[0]) {
  const { components } = props;

  return (
    <NextMDXRemote
      {...props}
      components={{ ...defaultComponents, ...(components || {}) }}
    />
  );
};

export default MDXRemote;
