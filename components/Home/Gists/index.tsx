import Div from "@kits/Div";
import Gists from "@components/Gists";
import PageTitle from "@components/Layout/Title/Page";
import GistsMoreLink from "./MoreLink";
import { useMediaQuery } from "react-responsive";
import breakpoints from "@stylesheets/constants/breakpoints.json";
import type { FC } from "react";

const homeGists = ["div", "useEnhancedState", "vscode"];

interface HomeGistsProps {
  items: Array<IGist>;
}

const HomeGists: FC<HomeGistsProps> = (props) => {
  const { items } = props;

  const isMediumScreen = useMediaQuery({
    minWidth: breakpoints.sm,
    maxWidth: breakpoints.lg,
  });

  const _items = items.filter(({ slug }) => homeGists.includes(slug));
  // const _items = homeGists.map((slug) => items.find((it) => it.slug === slug));

  return (
    <Div my="4">
      <PageTitle title="gists.title" ns="home" />
      <Gists items={_items?.slice?.(0, isMediumScreen ? 2 : 3)} />
      <GistsMoreLink />
    </Div>
  );
};

export default HomeGists;
