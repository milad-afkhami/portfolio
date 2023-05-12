import Div from "@kits/Div";
import Text from "@kits/Text";

const FooterCopyRight = (props) => {
  return (
    <Div py="4" border="text-primary" borderSide="top">
      <Div width="100%" flex={["center", "between"]}>
        <Text size="xsm">layout.footer.copyRight</Text>
        <Text size="xsm" dir="ltr">
          layout.footer.copyRightEng
        </Text>
      </Div>
    </Div>
  );
};

export default FooterCopyRight;
