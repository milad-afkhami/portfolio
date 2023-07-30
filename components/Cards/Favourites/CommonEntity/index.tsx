import { Div } from "style-wiz";
import FavouriteCommonEntityCard from "./Item";
import responsiveStyles from "@helpers/responsiveStyles";
import type { FC } from "react";

interface FavouriteCommonEntityCardsProps {
  items: string[];
  entityType: IFavouriteEntities;
}

const FavouriteCommonEntityCards: FC<FavouriteCommonEntityCardsProps> = (
  props
) => {
  const { items, entityType } = props;

  return (
    <Div
      grid={["repeat(1, 1fr)", , 4, 5, "row"]}
      styles={Object.assign(
        responsiveStyles("sm", { gridTemplateColumns: "repeat(2, 1fr)" }),
        responsiveStyles("md", { gridTemplateColumns: "repeat(3, 1fr)" }),
        responsiveStyles("lg", { gridTemplateColumns: "repeat(4, 1fr)" })
      )}
      mb="6"
    >
      {items.map((item) => (
        <FavouriteCommonEntityCard
          key={item}
          slug={item}
          entityType={entityType.toLowerCase() as IFavouriteEntities}
        />
      ))}
    </Div>
  );
};

export default FavouriteCommonEntityCards;
