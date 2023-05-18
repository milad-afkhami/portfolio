import Breadcrumb from "@kits/Breadcrumb";
import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import MDXRemote from "@components/Markdown/MDXRemote";
import MarkdownWrapper from "@components/Markdown/Wrapper";
import MarkdownVariables from "@components/Markdown/Variables";
import GistSummary from "@components/Gists/Summary";
import SectionTitle from "@components/Layout/Title/Section";
import { useRouter } from "next/router";
import GistServices from "@services/gist";
import type { FC } from "react";
import type {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
} from "next";
import type { MDXResult } from "@_types/components";

const GistPage: FC<MDXResult<IGist>> = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  const { title, summary } = props?.frontMatter || {};
  const source = props?.source || {};

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
          <SectionTitle title={title} />
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
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const gist = await GistServices.getDetail(params?.slug as string);

  return { props: { gist } };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const gists = await GistServices.getList();

  const paths = (locales || []).reduce(
    (acc, locale) => [
      ...acc,
      ...(gists.map(({ slug }) => ({ params: { slug }, locale })) || []),
    ],
    [] as GetStaticPathsResult["paths"]
  );

  return {
    paths,
    fallback: false,
  };
};

export default GistPage;
