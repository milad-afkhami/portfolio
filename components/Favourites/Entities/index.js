import React from "react";
import { Div, Link, Text } from "@kits";
import { useMemo } from "@hooks";
import { FavouritesHelper } from "@helpers";
import { PageTitle, SectionTitle } from "@components/Layout";
import { FavouriteEntity } from "./Entity";

export const FavouriteEntities = (props) => {
  const {} = props || {};
  const favouritesLinks = useMemo(FavouritesHelper.getLinks, []);

  return (
    <Div>
      <PageTitle title="favourites.title" />
      {favouritesLinks.map(({ links, group }, i) => (
        <Div key={i} flex={["start", "start", "column"]} mb="3">
          <SectionTitle
            icon={group}
            title={`favourites.group.${group}`}
            tag="h3"
          />
          <Div
            display="flex"
            css={{ columnGap: "var(--spacing-3)", flexDirection: "column" }}
            responsive={{
              sm: { css: { flexDirection: "row".imp() } },
              md: { css: { columnGap: "var(--spacing-4)".imp() } },
            }}
            width="100%"
            overflowX="auto"
            thinScrollbar
          >
            {links.map((item, i) => (
              <FavouriteEntity {...item} key={i} />
            ))}
          </Div>
        </Div>
      ))}
    </Div>
  );
};
