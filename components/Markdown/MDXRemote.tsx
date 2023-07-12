import Div from "@kits/Div";
import Image from "@kits/Image";
import {
  MDXRemote as NextMDXRemote,
  type MDXRemoteProps as NextMDXRemoteProps,
} from "next-mdx-remote";

const defaultComponents = { Div, Image };

const MDXRemote = function (props: Parameters<typeof NextMDXRemote>[0]) {
  const { components } = props;

  return (
    <NextMDXRemote
      {...props}
      components={{
        ...(defaultComponents as NextMDXRemoteProps["components"]),
        ...(components || {}),
      }}
    />
  );
};

export default MDXRemote;
