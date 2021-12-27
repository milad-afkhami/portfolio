import React from "react";
import { Div } from "@kits";
import { BreadcrumbJsonLd } from "@components/SEO";
import { BreadcrumbLink } from "./Link";
import { useTranslation } from "@hooks";

export function Breadcrumb(props) {
  const {
    routes,
    lastItemBold = true,
    className = "",
    itemClassName = "",
  } = props;
  const { t } = useTranslation();

  const itemListElements = routes.reduce((acc, { link, title }, index) => {
    acc.push({
      "@type": "ListItem",
      position: index + 1,
      name: t(title || ""),
      item: link || "",
    });
    return acc;
  }, []);

  return (
    <>
      <BreadcrumbJsonLd itemListElements={itemListElements} />
      <Div flex={["center"]} className={className} overflowX="hidden">
        {routes.map((route, index) => {
          const lastItem = index + 1 === routes.length;
          return (
            <Div key={index} flex={["center"]} className={itemClassName}>
              <BreadcrumbLink route={route} lastItem={lastItem} />
            </Div>
          );
        })}
      </Div>
    </>
  );
}
