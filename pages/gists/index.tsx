import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import Gists from "@components/Gists";
import GistServices from "@services/gist";

const GistsPage = (props) => {
  return (
    <>
      <Head canonical="/gists" page="gists" />
      <Div width="100%" py="3">
        <PageTitle title="gists.title" />
        <Gists items={props?.gists} loading={!props?.gists} />
      </Div>
    </>
  );
};

export async function getStaticProps() {
  const gists = await GistServices.getList();

  return { props: { gists } };
}

export default GistsPage;
