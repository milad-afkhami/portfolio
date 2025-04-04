"use client";

import type { ComponentProps } from "react";
import CodeBlock from "@/components/CodeBlock";
import Image, { type ImageProps } from "next/image";
import { MDXRemote as MDXRemoteComponent, type MDXRemoteSerializeResult } from "next-mdx-remote";

type Props = {
  content: MDXRemoteSerializeResult;
  components?: ComponentProps<typeof MDXRemoteComponent>["components"];
};

export default function MDXRemote({ content }: Props): JSX.Element {
  return (
    <div className="prose prose-lg max-w-none [&_table]:block [&_table]:overflow-x-auto">
      <MDXRemoteComponent
        {...content}
        components={{
          Image,
          img: (props) => (
            <div className="relative mx-auto h-52 w-[min(1000px,100%)] md:h-96">
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image
                {...(props as ImageProps)}
                fill
                objectFit="contain"
                className="mx-auto my-0 !w-fit overflow-hidden rounded-md"
              />
            </div>
          ),
          pre: CodeBlock,
        }}
      />
    </div>
  );
}
