import { BreadcrumbJsonLd } from "next-seo";
import { Breadcrumb as UiWizBreadcrumb, BreadcrumbProps } from "ui-wiz";
import type { FC } from "react";
import type { ItemListElements as NextSeoItemListElements } from "next-seo/lib/types";

interface ItemListElements extends NextSeoItemListElements {
  "@type": "ListItem";
}

const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  const { items } = props;

  const itemListElements = items.reduce<ItemListElements[]>(
    (
      acc,
      { link, title }: { link?: string; title?: string },
      index: number
    ) => {
      acc.push({
        "@type": "ListItem",
        position: index + 1,
        name: title ?? "",
        item: link ?? "",
      });
      return acc;
    },
    []
  );

  return (
    <nav>
      <BreadcrumbJsonLd itemListElements={itemListElements} />
      <UiWizBreadcrumb items={items} />
    </nav>
  );
};
export default Breadcrumb;
