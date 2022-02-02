import React from "react";
import { Div } from "@kits";
import { Gists } from "@components/Gists";
import { useMediaQuery } from "@hooks";
import { breakpoints } from "@stylesheets";
import { PageTitle } from "@components/Layout";
import { GistsMoreLink } from "./MoreLink";

const homeGists = ["div", "useEnhancedState", "text"];

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

export { HomeGists as Gists };
