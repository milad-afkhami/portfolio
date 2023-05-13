import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import SectionTitle from "@components/Layout/Title/Section";
import PageTitle from "@components/Layout/Title/Page";

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
