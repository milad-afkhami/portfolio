import Div from "@kits/Div";
import PageTitle from "@components/Layout/Title/Page";
import GistsMoreLink from "./MoreLink";
import dynamic from "next/dynamic";
import type { FC } from "react";

const GistCards = dynamic(() => import("@components/Cards/Gist"), {
  ssr: false,
});

const homeGists = ["utility-types", "useIntersector", "vscode"];

interface HomeGistsProps {
  items: Array<IGist>;
}

const HomeGists: FC<HomeGistsProps> = (props) => {
  const { items } = props;

  // const isMediumScreen = useMediaQuery({ minWidth: breakpoints.sm, maxWidth: breakpoints.lg });

  // const _items = items.filter(({ slug }) => homeGists.includes(slug));
  const _items = homeGists
    .map((slug) => items.find((it) => it.slug === slug))
    .filter(Boolean) as Array<IGist>;

  return (
    <Div my="4">
      <PageTitle title="gists.title" ns="home" />
      <GistCards items={_items} />
      <GistsMoreLink />
    </Div>
  );
};

export default HomeGists;
