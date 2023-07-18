import { Div } from "style-wiz";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import GistCards from "@components/Cards/Gist";
import GistServices from "@services/gist";
import I18nHelper from "@helpers/i18n";
import type { GetStaticProps } from "next";
import type { PageComponent } from "@_types/components";

interface GistsPageProps {
  gists: Array<IGist>;
}

const GistsPage: PageComponent<GistsPageProps> = (props) => {
  const { gists } = props;

  return (
    <>
      <Head canonical="/gists" page="gists" />
      <Div width="100%" py="3">
        <PageTitle title="gists.title" />
        <GistCards items={gists} />
      </Div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [t9n = {}, gists] = await Promise.all([
    I18nHelper.ssrT9n(locale, "layout"),
    GistServices.getList(),
  ]);

  return { props: { gists, ...t9n } };
};

export default GistsPage;
