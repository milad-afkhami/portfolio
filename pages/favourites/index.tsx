import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import FavouriteEntities from "@components/Favourites/Entities";
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

export default FavouritesPage;
