import { Div } from "style-wiz";
import Image from "@kits/Image";
import { MDXRemote as NextMDXRemote } from "next-mdx-remote";

const defaultComponents = { Div, Image };

const MDXRemote = function (props: Parameters<typeof NextMDXRemote>[0]) {
  const { components } = props;

  return (
    <NextMDXRemote
      {...props}
      // @ts-expect-error
      components={{
        ...defaultComponents,
        ...(components ?? {}),
      }}
    />
  );
};

export default MDXRemote;
