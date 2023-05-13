import Div from "@kits/Div";
import Gists from "@components/Gists";
import { useMediaQuery } from "react-responsive";
import breakpoints from "@stylesheets/breakpoints";
import PageTitle from "@components/Layout/Title/Page";
import GistsMoreLink from "./MoreLink";

const homeGists = ["div", "useEnhancedState", "vscode"];

const HomeGists = (props) => {
  const isMediumScreen = useMediaQuery({
    minWidth: breakpoints.sm,
    maxWidth: breakpoints.lg,
  });

  // const items = props?.items.filter((it) => homeGists.includes(it.slug));
  // this is better to skip the sorting step
  const items = homeGists.map((slug) =>
    props.items.find((it) => it.slug === slug)
  );

  return (
    <Div my="4">
      <PageTitle title="home.gists.title" />
      <Gists items={items?.slice?.(0, isMediumScreen ? 2 : 3)} />
      <GistsMoreLink />
    </Div>
  );
};

export default HomeGists;
