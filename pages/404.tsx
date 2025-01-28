import { Div } from "style-wiz";
import Link from "@kits/Link";
import Button from "@kits/Button";
import SectionTitle from "@components/Layout/Title/Section";
import NotFoundAnimation from "@components/Error/NotFoundAnimation";
import I18nHelper from "@helpers/i18n";
import type { PageComponent } from "@_types/components";
import type { GetStaticProps } from "next";

const NotFound: PageComponent = () => (
  <div>
    <NotFoundAnimation />
    <Div
      flex={["center", "center", "column"]}
      styles={{ gap: "1rem" }}
      mt="5"
      width="100%"
    >
      <SectionTitle title="error.pageNotFound" />
      <Link href="/">
        <Button text="error.goBack" variant="outlined" />
      </Link>
    </Div>
  </div>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const t9n = await I18nHelper.ssrT9n(locale, "layout");

  return { props: t9n ?? {} };
};

export default NotFound;
