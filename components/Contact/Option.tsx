import Div from "@kits/Div";
import Icon from "@kits/Icon";
import Text from "@kits/Text";
import { useTranslation } from "next-i18next";
import ToastUtil from "@utils/toast";
import contactOptions from "@configs/contact";
import type { FC } from "react";

type ContactOptionProps = Omit<ValueOf<typeof contactOptions>, "private">;

const ContactOption: FC<ContactOptionProps> = (props) => {
  const { type, label, value } = props;
  const { t } = useTranslation("layout");

  const onClickContactWay = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => ToastUtil.success(t("message.textCopied")))
      .catch(() => ToastUtil.error(t("message.error.something")));
  };

  return (
    <Div
      flex={["center", , "column"]}
      Mw="100%"
      overflow="hidden"
      onClick={onClickContactWay}
      cursor="pointer"
    >
      <Div
        bg="brand-main"
        hoverBg="brand-hover"
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
        <Text color="brand-main" size="lg" bold transform="capitalize">
          {`contact.${type}`}
        </Text>
      </Div>
      <Div
        flex={["center", "center"]}
        Mw="80%"
        hover={{ css: { textDecoration: "underline" } }}
        color="brand-light"
      >
        <Text noTranslation color="brand-light" size="sm" truncate>
          {label || value}
        </Text>
      </Div>
    </Div>
  );
};

export default ContactOption;
