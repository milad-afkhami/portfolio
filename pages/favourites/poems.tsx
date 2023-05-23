import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import SectionTitle from "@components/Layout/Title/Section";
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

export default FavouritePoemsPage;
