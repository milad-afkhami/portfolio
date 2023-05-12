import Div from "@kits/Div";
import FavouriteArtistCard from "./Card";
import { favouriteArtistsData } from "@data/favourites";

const FavouriteArtists = (props) => {
  return (
    <Div
      grid={["repeat(1, 1fr)", , 5, "4rem", "row"]}
      responsive={{
        sm: { css: { gridTemplateColumns: "repeat(2, 1fr)" } },
        lg: { css: { gridTemplateColumns: "repeat(3, 1fr)" } },
      }}
      mb="6"
    >
      {favouriteArtistsData.map((artist) => (
        <FavouriteArtistCard {...artist} />
      ))}
    </Div>
  );
};





            
                
            
            
            
            export default FavouriteArtists