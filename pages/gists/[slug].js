import React from "react";
import { Breadcrumb, Div, Text } from "@kits";
import { useRouter } from "@hooks";
import { Head } from "@components/SEO";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { GistServices } from "@services";
import { GlobalBSTableStyle } from "@stylesheets";
import { MarkdownWrapper, MarkdownVariables } from "@components/Markdown";
import { GistTitle, GistSummary } from "@components/Gists";

const components = {
  Image: dynamic(() => import("@kits").then((module) => module.Image)),
  Div,
  Text,
  Variables: MarkdownVariables,
};

export default function GistPage(props) {
  const router = useRouter();
  const slug = router.query.slug;
  const { title, summary } = props?.gist?.frontMatter || {};
  const source = props?.gist?.source || {};

  return (
    <>
      <Head title={title} description={summary} canonical={`/gists/${slug}`} />
      <GlobalBSTableStyle />
      <Div width="100%" py="3">
        <Breadcrumb
          routes={[
            { title: "home.title", link: "/" },
            { title: "gists.title", link: "/gists" },
            { title, link: `/gists/${slug}` },
          ]}
        />
        <Div>
          <GistTitle title={title} />
          <GistSummary summary={summary} />
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
