import { useMemo } from "react";
import Div from "@kits/Div";
import FavouritesHelper from "@helpers/favourites";
import PageTitle from "@components/Layout/Title/PageTitle";
import SectionTitle from "@components/Layout/Title/SectionTitle";
import FavouriteEntity from "./Entity";

const FavouriteEntities = (props) => {
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
              sm: { css: { flexDirection: "row" } },
              md: { css: { columnGap: "var(--spacing-4)" } },
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





            
                
            
            
            
            export default FavouriteEntities