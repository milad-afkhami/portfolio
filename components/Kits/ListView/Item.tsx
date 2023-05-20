import Div from "@kits/Div";
import Text from "@kits/Text";
import type { FC } from "react";
import type { PropsWithIndex } from "@_types/components";

export interface ListViewItemProps {
  title: string;
  subtitle: string;
}

const ListItem: FC<PropsWithIndex<ListViewItemProps>> = (props) => {
  const { index, title, subtitle } = props;

  return (
    <Div
      flex={["center", "start"]}
      height="var(--list-view-item-height)"
      // bg="bg-secondary-main"
      hoverBg="bg-secondary-paler"
      responsive={{ sm: { px: "3" } }}
      curve="xsm"
      py="2"
      cursor="pointer"
    >
      <Div flex={["center", "center"]}>
        <Text size="md" noTranslation>{`${index}. `}</Text>
      </Div>
      <Div mx="3" Mw="-webkit-fill-available">
        <Div Mw="100%">
          <Text size="sm" noTranslation truncate>
            {title}
          </Text>
        </Div>
        <Div display="flex">
          <Text size="xsm" color="text-secondary-main" noTranslation>
            {subtitle}
          </Text>
        </Div>
      </Div>
    </Div>
  );
};

export default ListItem;
