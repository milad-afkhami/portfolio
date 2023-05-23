import Breadcrumb from "@kits/Breadcrumb";
import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import Markdown from "@components/Markdown";
import GistSummary from "@components/Gists/Summary";
import SectionTitle from "@components/Layout/Title/Section";
import useTranslation from "@hooks/useTranslation";
import { useRouter } from "next/router";
import GistServices from "@services/gist";
import type { FC } from "react";
import type {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
} from "next";
import type { MDXResult, PageComponent } from "@_types/components";

type GistPageProps = { gist: MDXResult<IGist> };

const GistPage: PageComponent<GistPageProps> = (props) => {
  const { gist } = props;

  const { t } = useTranslation("layout");
  const router = useRouter();
  const { slug } = router.query;
  const { title, summary } = gist?.frontMatter || {};
  const source = gist?.source;

  return (
    <>
      <Head title={title} description={summary} canonical={`/gists/${slug}`} />
      <Div width="100%" py="3">
        <Breadcrumb
          routes={[
            { title: t("header.menu.home"), link: "/" },
            { title: t("header.menu.gists"), link: "/gists" },
            { title, link: `/gists/${slug}` },
          ]}
        />
        <Div>
          <SectionTitle title={title} />
          <GistSummary summary={summary} />
          <Markdown source={source} />
        </Div>
      </Div>
    </>
  );
};

export const getStaticProps: GetStaticProps<GistPageProps> = async ({
  locale,
  params,
}) => {

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
