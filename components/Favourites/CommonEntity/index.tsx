import Div from "@kits/Div";
import FavouriteCommonEntityCard from "./Card";
import type { FC } from "react";

interface FavouriteCommonEntityListProps {
  items: Array<string>;
  entityType: IFavouriteEntities;
}

const FavouriteCommonEntityList: FC<FavouriteCommonEntityListProps> = (
  props
) => {
  const { items, entityType } = props;

  return (
    <Div
      grid={["repeat(1, 1fr)", , 4, 5, "row"]}
      responsive={{
        sm: { css: { gridTemplateColumns: "repeat(2, 1fr)" } },
        md: { css: { gridTemplateColumns: "repeat(3, 1fr)" } },
        lg: { css: { gridTemplateColumns: "repeat(4, 1fr)" } },
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

export default FavouriteCommonEntityList;
