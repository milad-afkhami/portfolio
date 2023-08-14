import { Div } from "style-wiz";
import Icon from "@kits/Icon";
import Text from "@kits/Text";
import copyToClipboard from "@utils/copyToClipboard";
import contactOptions from "@configs/contact";
import type { FC } from "react";

type ContactOptionProps = ValueOf<typeof contactOptions>;

const ContactOption: FC<ContactOptionProps> = (props) => {
  const { type, label, value } = props;

  return (
    <Div
      flex={["center", , "column"]}
      Mw="100%"
      overflow="hidden"
      cursor="pointer"
      onClick={() => copyToClipboard(value)}
    >
      <Div
        bg="brand-primary-main"
        hoverBg="brand-primary-hover"
        curve="circle"
        width="100px"
        height="100px"
        flex={["center", "center"]}
        position="relative"
        mb="3"
      >
        <Icon name={type} size="2.5rem" />
      </Div>
      <Div mb="2">
        <Text color="brand-primary-main" size="lg" bold transform="capitalize">
          {`contact.${type}`}
        </Text>
      </Div>
      <Div flex={["center", "center"]} Mw="80%" color="brand-primary-light">
        <Text noTranslation color="brand-primary-light" size="sm" truncate>
          {label ?? value}
        </Text>
      </Div>
    </Div>
  );
};

export default ContactOption;
