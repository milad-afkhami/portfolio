import Div from "@kits/Div";
import Icon from "@kits/Icon";
import Text from "@kits/Text";
import type { FC } from "react";

type ContactOptionProps = Omit<ValueOf<typeof contactOptions>, "private">;

const ContactOption: FC<ContactOptionProps> = (props) => {
  const { type, label, value } = props;

  const onClickContactWay = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => toast("layout.message.textCopied", { type: "success" }))
      .catch(() => toast("layout.message.error.something", { type: "error" }));
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
        bg="brand"
        hoverBg="brand-hover"
        curve="circle"
        width="100px"
        height="100px"
        flex={["center", "center"]}
        position="relative"
        mb="3"
        // responsive={{ md: { width: "100px", height: "100px" } }}
      >
        <Icon name={type} size="2.5rem" />
      </Div>
      <Div mb="2">
        <Text color="brand" size="lg-b" css={{ textTransform: "capitalize" }}>
          {`contact.${type}`}
        </Text>
      </Div>
      <Div
        flex={["center", "center"]}
        Mw="80%"
        hover={{ css: { textDecoration: "underline" } }}
        color="brand-light"
      >
        <Text color="brand-light" size="sm" Mw="100%" truncate>
          {label || value}
        </Text>
      </Div>
    </Div>
  );
};

export default ContactOption;
