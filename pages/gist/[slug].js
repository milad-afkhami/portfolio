import React from "react";
import { Breadcrumb, Div, Text } from "@kits";
import { useRouter } from "@hooks";
import { Head } from "@components/SEO";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { GistServices } from "@services";
import { GlobalBSTableStyle } from "@stylesheets";
import { MarkdownWrapper } from "@components/Layout/Markdown";

const components = {
  Image: dynamic(() => import("@kits").then((module) => module.Image)),
  Div,
  Text,
};

export default function GistPage(props) {
  const router = useRouter();
  const slug = router.query.slug;
  const { title, summary, publishedAt, readingTime, category } =
    props?.gist?.frontMatter || {};
  const source = props?.gist?.source || {};

  return (
    <>
      <Head title={title} description={summary} canonical={`/gist/${slug}`} />
      <GlobalBSTableStyle />
      <Div width="100%" py="3">
        <Breadcrumb
          routes={[
            { title: "home", link: "/" },
            { title: "gists.title", link: "/gist" },
            { title, link: `/gist/${slug}` },
          ]}
        />
        <Div>
          <Div my="3">
            <Text size="h-md-b" as="h1" lineHeight="1.8">
              {title}
            </Text>
          </Div>
          <MarkdownWrapper>
            <MDXRemote {...source} components={components} />
          </MarkdownWrapper>
        </Div>
      </Div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const result = await GistServices.getDetail(params.slug);

  return {
    props: { gist: result.gist },
  };
};

export const getStaticPaths = async ({ locales }) => {
  const gists = await GistServices.getList();

  const paths = gists.reduce((acc, { slug }) => {
    locales.forEach((locale) => {
      acc.push({ params: { slug }, locale });
    });

    return acc;
  }, []);

  return {
    paths,
    fallback: false,
  };
};
