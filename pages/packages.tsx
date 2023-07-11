import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import PackageServices from "@services/package";
import I18nHelper from "@helpers/i18n";
import Intervals from "@constants/interval";
import type { PageComponent } from "@_types/components";
import type { GetStaticProps } from "next";
import PackageCards from "@components/Cards/Package";

const PackagesPage: PageComponent<{ packages: Array<IPackage> }> = (props) => {
  const { packages } = props;

  return (
    <>
      <Head canonical="/packages" />
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

  return {
    props: { ...t9n, packages },
    revalidate: Intervals.Week,
  };
};

export default PackagesPage;
