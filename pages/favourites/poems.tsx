import Div from "@kits/Div";
import { Head } from "@components/SEO";
import SectionTitle from "@components/Layout/Title/SectionTitle";
import PageTitle from "@components/Layout/Title/PageTitle";

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
