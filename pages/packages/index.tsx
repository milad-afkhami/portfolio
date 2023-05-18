import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import SectionTitle from "@components/Layout/Title/Section";
import type { PageComponent } from "@_types/components";

const PackagesPage: PageComponent = () => (
  <>
    <Head canonical="/packages" />
    <Div width="100%" py="3">
      <PageTitle title="packages.title" />
      <SectionTitle title="layout.message.comingSoon" />
    </Div>
  </>
);

export default PackagesPage;
