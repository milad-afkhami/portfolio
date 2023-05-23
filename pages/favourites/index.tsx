import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import FavouriteEntities from "@components/Favourites/Entities";
import I18nHelper from "@helpers/i18n";
import type { GetStaticProps } from "next";
import type { PageComponent } from "@_types/components";

const FavouritesPage: PageComponent = () => (
  <>
    <Head canonical="/favourites" page="favourites" />
    <Div width="100%" py="3">
      <FavouriteEntities />
    </Div>
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [t9n = {}] = await Promise.all([
    I18nHelper.ssrT9n(locale, "layout", "favourites.common"),
  ]);

  return { props: t9n };
};

export default FavouritesPage;
