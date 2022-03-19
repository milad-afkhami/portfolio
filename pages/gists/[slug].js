import React from "react";
import { Breadcrumb, Div } from "@kits";
import { useRouter } from "@hooks";
import { Head } from "@components/SEO";
import { MDXRemote } from "@components/Markdown";
import dynamic from "next/dynamic";
import { GistServices } from "@services";
import { MarkdownWrapper, MarkdownVariables } from "@components/Markdown";
import { GistTitle, GistSummary } from "@components/Gists";

export default function GistPage(props) {
  const router = useRouter();
  const slug = router.query.slug;
  const { title, summary } = props?.gist?.frontMatter || {};
  const source = props?.gist?.source || {};

  return (
    <>
      <Head title={title} description={summary} canonical={`/gists/${slug}`} />
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
            <MDXRemote
              {...source}
              components={{ Variables: MarkdownVariables }}
            />
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
    // locales.forEach((locale) => {
    //   acc.push({ params: { slug }, locale });
    // });
    acc.push({ params: { slug } });

    return acc;
  }, []);

  return {
    paths,
    fallback: false,
  };
};
