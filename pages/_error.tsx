import Div from "@kits/Div";
import Text from "@kits/Text";
import Link from "@kits/Link";
import Button from "@kits/Button";

const Error = (props) => {
  return (
    <Div height="100%" flex={["center", "center", "column"]} p="3" mh="100%">
      <Div my="3">
        <Text>{props.title || "error.pageNotFound"}</Text>
        <Text mx="2" noTranslation>
          |
        </Text>
        <Text>{props.statusCode}</Text>
      </Div>
      <Link href="/">
        <Button text="error.goBack" />
      </Link>
    </Div>
  );
};

export default Error;
