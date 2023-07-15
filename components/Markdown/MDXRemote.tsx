import Div from "@kits/Div";
import Image from "@kits/Image";
import { MDXRemote as NextMDXRemote } from "next-mdx-remote";

const defaultComponents = { Div, Image };

const MDXRemote = function (props: Parameters<typeof NextMDXRemote>[0]) {
  const { components } = props;

  return (
    <NextMDXRemote
      {...props}
      // @ts-ignore
      components={{
        ...defaultComponents,
        ...(components || {}),
      }}
    />
  );
};

export default MDXRemote;
