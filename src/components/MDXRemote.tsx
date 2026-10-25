import CodeBlock from "@/components/CodeBlock";
import Image, { type ImageProps } from "next/image";
import MermaidDiagram from "@/components/MermaidDiagram";
import React, { isValidElement, type PropsWithChildren, type ReactElement } from "react";

type VideoProps = {
  src: string;
};

function Video({ src }: VideoProps): JSX.Element {
  return (
    <div className="relative mx-auto w-[min(1000px,100%)]">
      <video src={src} autoPlay loop muted playsInline className="mx-auto my-0 w-full overflow-hidden rounded-md" />
    </div>
  );
}

function MarkdownPre(props: PropsWithChildren<{ className?: string }>): JSX.Element {
  const child = props.children;
  if (
    isValidElement<{ className?: string; children?: React.ReactNode }>(child) &&
    child.props.className?.split(/\s+/).includes("language-mermaid") &&
    typeof child.props.children === "string"
  ) {
    return <MermaidDiagram chart={child.props.children} />;
  }

  return <CodeBlock {...props} />;
}

export const mdxComponents = {
  Image,
  Video,
  img: (props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => (
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
  pre: MarkdownPre,
};

type Props = {
  content: ReactElement;
};

export default function MDXRemote({ content }: Props): JSX.Element {
  return <div className="prose prose-lg max-w-none [&_table]:block [&_table]:overflow-x-auto">{content}</div>;
}
