import { Div, type DivProps } from "style-wiz";
import Image from "@kits/Image";
import { MDXRemote as NextMDXRemote } from "next-mdx-remote";
import type ImageProps from "@kits/Image/props";

const defaultComponents = {
  Div: (props: DivProps) => <Div {...props} />,
  // eslint-disable-next-line jsx-a11y/alt-text
  Image: (props: ImageProps) => <Image {...props} />,
};

const MDXRemote = function (props: Parameters<typeof NextMDXRemote>[0]) {
  const { components } = props;

  return (
    <NextMDXRemote
      {...props}
      components={{
        ...defaultComponents,
        ...(components ?? {}),
      }}
    />
  );
};

export default MDXRemote;
