import Button from "@kits/Button";
import { Div } from "style-wiz";
import Link from "@kits/Link";
import Text from "@kits/Text";
import I18nHelper from "@helpers/i18n";
import type { FC } from "react";
import type { GetStaticProps } from "next";

// const { title, statusCode } = props;
const ServerError: FC = () => (
  <Div
    height="100%"
    flex={["center", "center", "column"]}
    p="3"
    mh="100%"
    gap="3"
  >
    <Div gap="2">
      <Text ns="common">error.server</Text>
      <Text noTranslation>|</Text>
      <Text noTranslation>500</Text>
    </Div>
    <Link href="/">
      <Button text="error.goBack" />
    </Link>
  </Div>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const t9n = await I18nHelper.ssrT9n(locale, "layout");

  return { props: t9n || {} };
};

export default ServerError;
