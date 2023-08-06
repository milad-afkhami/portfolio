import Breadcrumb from "@kits/Breadcrumb";
import { Div } from "style-wiz";
import Head from "@components/SEO/Head";
import Markdown from "@components/Markdown";
import GistSummary from "@components/Gists/Summary";
import PageTitle from "@components/Layout/Title/Page";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import GistServices from "@services/gist";
import I18nHelper from "@helpers/i18n";
import type {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
} from "next";
import type { MDXResult, PageComponent } from "@_types/components";

interface GistPageProps {
  gist: MDXResult<IGist>;
}

const GistPage: PageComponent<GistPageProps> = (props) => {
  const { gist } = props;
  const [t] = useTranslation("layout");
  const router = useRouter();
  const slug = router.query.slug as string;
  const {
    source,
    frontMatter: { title, summary },
  } = gist;

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
        <Div mt="3">
          <PageTitle title={title} />
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
  const [t9n = {}, gist] = await Promise.all([
    I18nHelper.ssrT9n(locale, "layout"),
    GistServices.getDetail(params?.slug as string),
  ]);

  return { props: { gist, ...t9n } };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const gists = await GistServices.getList();

  const paths = (locales ?? []).reduce<GetStaticPathsResult["paths"]>(
    (acc, locale) => [
      ...acc,
      ...gists.map(({ slug }) => ({ params: { slug }, locale })),
    ],
    []
  );

  return { paths, fallback: false };
};

export default GistPage;
