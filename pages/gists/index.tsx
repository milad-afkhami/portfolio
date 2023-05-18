import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import Gists from "@components/Gists";
import GistServices from "@services/gist";
import type { FC } from "react";

interface GistsPageProps {
  gists: Array<IGist>;
}

const GistsPage: FC<GistsPageProps> = (props) => {
  const { gists } = props;

  return (
    <>
      <Head canonical="/gists" page="gists" />
      <Div width="100%" py="3">
        <PageTitle title="gists.title" />
        <Gists items={gists} />
      </Div>
    </>
  );
};

export async function getStaticProps() {
  const gists = await GistServices.getList();

  return { props: { gists } };
}

export default GistsPage;
