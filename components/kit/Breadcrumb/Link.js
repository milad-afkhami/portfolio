import React from "react";
import { Div, Text, Icon, Link } from "@kits";
import { useTranslation } from "@hooks";

export function BreadcrumbLink(props: Props) {
  const { route, lastItem } = props;
  const { t } = useTranslation();

  const genTitle = (title, lastItem) => (
    <Text
      cursor={lastItem ? "default" : "pointer"}
      px="2"
      hoverColor={!lastItem ? "brand" : ""}
      size={lastItem ? "sm-b" : "sm"}
      color="text-secondary"
    >
      {title}
    </Text>
  );

  return (
    <Div my="3">
      {route.link && !lastItem ? (
        <Link href={route.link}>{genTitle(route.title, lastItem)}</Link>
      ) : (
        genTitle(route.title, lastItem)
      )}
      {/* {lastItem ? null : <Icon name="arrows_right" size="10" multiDirection />} */}
      {lastItem ? null : ">"}
    </Div>
  );
}
