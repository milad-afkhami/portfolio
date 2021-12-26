import React from "react";
import { Div, Link, Text } from "@kits";
import { Head } from "@components/SEO";
import { FavouriteEntityCard } from "@components/Favourites";
import { FAVOURITE_TYPES } from "@constants";

const FavouritesPage = (props) => {
  return (
    <>
      <Head canonical="/favourites" />
      <Div width="100%" py="3">
        <Div flex={["start", "center", "column"]} my="4">
          {/* <FavouriteEntityCard type={FAVOURITE_TYPES.SONG.ARTISTS} />
          <FavouriteEntityCard type={FAVOURITE_TYPES.SONG.PLAYLISTS} /> */}

          <Link
            href="/favourites/artists"
            mb="4"
            // hoverColor="text-secondary"
            underline
          >
            <Text size="h-sm-b">favourites.artists</Text>
          </Link>
          <Link
            href="/favourites/playlists"
            // hoverColor="text-secondary"
            underline
          >
            <Text size="h-sm-b">favourites.playlists</Text>
          </Link>
        </Div>
      </Div>
    </>
  );
};

export default FavouritesPage;
