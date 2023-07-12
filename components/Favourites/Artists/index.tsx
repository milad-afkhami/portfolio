import Div from "@kits/Div";
import FavouriteArtistCard from "./Card";
import favouriteArtistsData from "@data/favourites/artists";
import type { FC } from "react";

const FavouriteArtists: FC = () => (
  <Div
    grid={["repeat(1, 1fr)", , 5, "4rem", "row"]}
    responsive={{
      sm: { styles: { gridTemplateColumns: "repeat(2, 1fr)" } },
      lg: { styles: { gridTemplateColumns: "repeat(3, 1fr)" } },
    }}
    mb="6"
  >
    {favouriteArtistsData.map((artist) => (
      <FavouriteArtistCard key={artist.slug} {...artist} />
    ))}
  </Div>
);

export default FavouriteArtists;
