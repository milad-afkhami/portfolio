import Div from "@kits/Div";
import FavouriteCommonEntityCard from "./Item";
import type { FC } from "react";

interface FavouriteCommonEntityCardsProps {
  items: Array<string>;
  entityType: IFavouriteEntities;
}

const FavouriteCommonEntityCards: FC<FavouriteCommonEntityCardsProps> = (
  props
) => {
  const { items, entityType } = props;

  return (
    <Div
      grid={["repeat(1, 1fr)", , 4, 5, "row"]}
      responsive={{
        sm: { styles: { gridTemplateColumns: "repeat(2, 1fr)" } },
        md: { styles: { gridTemplateColumns: "repeat(3, 1fr)" } },
        lg: { styles: { gridTemplateColumns: "repeat(4, 1fr)" } },
      }}
      mb="6"
    >
      {items.map((item, i) => (
        <FavouriteCommonEntityCard
          key={i}
          slug={item}
          entityType={entityType?.toLowerCase?.() as IFavouriteEntities}
        />
      ))}
    </Div>
  );
};

export default FavouriteCommonEntityCards;
