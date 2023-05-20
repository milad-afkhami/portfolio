import Div from "@kits/Div";
import Image from "@kits/Image";
import Text from "@kits/Text";
import type { FC } from "react";

const SubscribeNewsletter: FC = () => (
  <Div
    bg="bg-tertiary-main"
    height="var(--layout-subscribe-newsletter-height)"
    flex={["center", "around"]}
  >
    <Image src="/images/lapert-logo-lg.png" height="300px" width="300px" />
    <Div flex={["center", "center", "column"]}>
      <Div mb="4">
        <Text size="md" bold ns="layout">
          subscribe.desc
        </Text>
      </Div>
      <Div
        height="3.5rem"
        width="400px"
        border="border-dark-main"
        display="flex"
      >
        <Div width="50%" height="100%" flex={["center", "center"]}>
          <Text ns="layout">subscribe.enterEmail</Text>
        </Div>
        <Div
          width="50%"
          height="100%"
          bg="text-primary-main"
          flex={["center", "center"]}
        >
          <Text color="bg-primary-main" ns="layout">
            subscribe.sendEmail
          </Text>
        </Div>
      </Div>
    </Div>
  </Div>
);

export default SubscribeNewsletter;
