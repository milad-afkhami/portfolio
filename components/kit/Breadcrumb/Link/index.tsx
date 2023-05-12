import React from "react";
import { Div, Link } from "@kits";
import { BreadcrumbLinkText } from "./Text";

export function BreadcrumbLink(props) {
  const { route, lastItem } = props;

  return (
    <Div my="3">
      {route.link && !lastItem ? (
        <Link href={route.link}>
          <BreadcrumbLinkText title={route.title} lastItem={lastItem} />
        </Link>
      ) : (
        <BreadcrumbLinkText title={route.title} lastItem={lastItem} />
      )}
      {/* {lastItem ? null : <Icon name="arrows_right" size="10" multiDirection />} */}
      {lastItem ? null : ">"}
    </Div>
  );
}
