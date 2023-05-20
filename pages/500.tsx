import Button from "@kits/Button";
import Div from "@kits/Div";
import Link from "@kits/Link";
import Text from "@kits/Text";
import type { FC } from "react";

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

export default ServerError;
