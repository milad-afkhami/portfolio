import Div from "@kits/Div";
import Text from "@kits/Text";
import type { FC } from "react";

const GistSummary: FC<Pick<IGist, "summary">> = (props) => {
  const { summary } = props;

  return (
    <Div my="3">
      <Text size="lg" as="p" noTranslation>
        {summary}
      </Text>
    </Div>
  );
};

export default GistSummary;
