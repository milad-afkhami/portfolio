import Div from "@kits/Div";
import Text from "@kits/Text";
import type { FC } from "react";

const FooterCopyRight: FC = () => (
  <Div py="4" border="text-primary-main" borderSide="top">
    <Div width="100%" flex={["center", "between"]}>
      <Text size="xsm" ns="layout">
        footer.copyRight
      </Text>
      <Text size="xsm" ns="layout" dir="ltr">
        footer.copyRightEng
      </Text>
    </Div>
  </Div>
);

export default FooterCopyRight;
