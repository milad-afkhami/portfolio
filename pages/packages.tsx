import { Div } from "style-wiz";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import PackageCards from "@components/Cards/Package";
import PackageServices from "@services/package";
import I18nHelper from "@helpers/i18n";
import type { PageComponent } from "@_types/components";
import type { GetStaticProps } from "next";

const PackagesPage: PageComponent<{ packages: Array<IPackage> }> = (props) => {
  const { packages } = props;

  return (
    <>
      <Head page="packages" canonical="/packages" />
      <Div width="100%" py="3">
        <PageTitle title="title" ns="packages" />
        <PackageCards items={packages} />
      </Div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async function ({ locale }) {
  const [t9n, packages] = await Promise.all([
    I18nHelper.ssrT9n(locale, "layout", "packages"),
    PackageServices.getList(),
  ]);

  return { props: { ...t9n, packages } };
};

export default PackagesPage;
