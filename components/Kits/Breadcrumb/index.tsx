import { Div } from "style-wiz";
import { BreadcrumbJsonLd } from "next-seo";
import BreadcrumbLink from "./Link";
import responsiveStyles from "@helpers/responsiveStyles";
import { responsiveUpperBoundBreakpoint } from "@configs/general";
import type { FC } from "react";
import type BreadcrumbProps from "./props";

type Accumulator = Array<{
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}>;

const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  const { routes } = props;

  const itemListElements = routes.reduce(
    (
      acc,
      { link, title }: { link?: string; title?: string },
      index: number
    ) => {
      acc.push({
        "@type": "ListItem",
        position: index + 1,
        name: title || "",
        item: link || "",
      });
      return acc;
    },
    [] as Accumulator
  );

  return (
    <nav>
      <BreadcrumbJsonLd itemListElements={itemListElements} />
      <Div
        as="ol"
        flex={["center"]}
        overflowX="auto"
        styles={responsiveStyles(responsiveUpperBoundBreakpoint, {
          overflowX: "hidden",
          flexWrap: "wrap",
        })}
      >
        {routes.map((route, index) => {
          const lastItem = index + 1 === routes.length;
          return (
            <BreadcrumbLink
              key={route.title}
              link={route.link}
              title={route.title}
              lastItem={lastItem}
            />
          );
        })}
      </Div>
    </nav>
  );
};
export default Breadcrumb;
