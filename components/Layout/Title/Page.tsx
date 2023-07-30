import { Div } from "style-wiz";
import Text from "@kits/Text";
import type { FC } from "react";
import type { PageTitleProps } from "./props";

const PageTitle: FC<PageTitleProps> = (props) => {
  const { title, tag, ns } = props;

  return (
    <Div mb="4">
      <Div
        flex={["center", "flex-start"]}
        py="3"
        border="border-light-main"
        borderSide="bottom"
      >
        <Text size="h-md" bold as={tag ?? "h1"} ns={ns}>
          {title}
        </Text>
      </Div>
    </Div>
  );
};

export default PageTitle;
