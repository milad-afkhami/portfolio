import Div from "@kits/Div";
import { Head } from "@components/SEO";
import { FavouriteCommonEntityList } from "@components/Favourites";
import { PageTitle, SectionTitle } from "@components/Layout";
import { FAVOURITE_TYPES } from "@constants";

const FavouritePoemsPage = (props) => {
  // const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/favourites/poems" page="favouritePoems" />
      <Div width="100%" py="3">
        <PageTitle title="favourites.poems.title" />
        <SectionTitle title="layout.message.comingSoon" />
      </Div>
    </>
  );
};

export default FavouritePoemsPage;
