import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import SectionTitle from "@components/Layout/Title/Section";
import type { FC } from "react";

const FavouritePoemsPage: FC = () => (
  <>
    <Head canonical="/favourites/poems" page="favouritePoems" />
    <Div width="100%" py="3">
      <PageTitle title="favourites.poems.title" />
      <SectionTitle title="message.comingSoon" ns="layout" />
    </Div>
  </>
);

export default FavouritePoemsPage;
