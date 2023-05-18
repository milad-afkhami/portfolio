import Div from "@kits/Div";
import Text from "@kits/Text";
import type { FC } from "react";
import type TextProps from "@kits/Text/props";

interface PageTitleProps {
  title: string;
  tag?: TextProps["as"];
}

const PageTitle: FC<PageTitleProps> = (props) => {
  const { title, tag } = props;

  return (
    <Div mb="4">
      <Div
        flex={["center", "start"]}
        py="3"
        border="border-light"
        borderSide="bottom"
      >
        <Text size="h-md-b" as={tag || "h1"}>
          {title}
        </Text>
      </Div>
    </Div>
  );
};

export default PageTitle;
