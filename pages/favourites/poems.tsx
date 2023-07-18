import { Div } from "style-wiz";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import SectionTitle from "@components/Layout/Title/Section";
import I18nHelper from "@helpers/i18n";
import type { GetStaticProps } from "next";
import type { PageComponent } from "@_types/components";

const FavouritePoemsPage: PageComponent = () => (
  <>
    <Head canonical="/favourites/poems" page="favouritePoems" />
    <Div width="100%" py="3">
      <PageTitle title="title" ns="favourites.poems" />
      <SectionTitle title="message.comingSoon" ns="layout" />
    </Div>
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [t9n = {}] = await Promise.all([
    I18nHelper.ssrT9n(locale, "layout", "favourites.poems"),
  ]);

  return { props: t9n };
};

export default FavouritePoemsPage;
