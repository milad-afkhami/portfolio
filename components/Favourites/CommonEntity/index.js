import React from "react";
import { Div } from "@kits";
import { FavouriteCommonEntityCard } from "./Card";

export const FavouriteCommonEntityList = (props) => {
  const { items, entityType } = props || {};

  return (
    <>
      <Div
        grid={["repeat(1, 1fr)", , 4, 5, "row"]}
        responsive={{
          sm: { css: { gridTemplateColumns: "repeat(2, 1fr)" } },
          md: { css: { gridTemplateColumns: "repeat(3, 1fr)" } },
          lg: { css: { gridTemplateColumns: "repeat(4, 1fr)" } },
        }}
        mb="6"
      >
        {items.map((item) => (
          <FavouriteCommonEntityCard
            slug={item}
            entityType={entityType?.toLowerCase?.()}
          />
        ))}
      </Div>
    </>
  );
};
