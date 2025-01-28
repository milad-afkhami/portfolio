import { useMemo } from "react";
import { Div } from "style-wiz";
import PageTitle from "@components/Layout/Title/Page";
import SectionTitle from "@components/Layout/Title/Section";
import FavouriteEntityCard from "@components/Cards/Favourites/Entity";
import FavouritesHelper from "@helpers/favourites";
import responsiveStyles from "@helpers/responsiveStyles";
import type { FC } from "react";

const FavouriteEntities: FC = () => {
  const favouritesLinks = useMemo(() => FavouritesHelper.getLinks(), []);

  return (
    <div>
      <PageTitle title="title" ns="favourites.common" />
      {favouritesLinks.map(({ links, group }) => (
        <Div key={group} flex={["flex-start", "flex-start", "column"]} mb="3">
          <SectionTitle
            icon={group}
            ns="favourites.common"
            title={`group.${group}`}
          />
          <Div
            width="100%"
            overflowX="auto"
            thinScrollbar
            gap="4"
            styles={responsiveStyles("sm", { display: "flex" })}
          >
            {links.map((item) => (
              <FavouriteEntityCard {...item} key={item.label} />
            ))}
          </Div>
        </Div>
      ))}
    </div>
  );
};

export default FavouriteEntities;
