import React from "react";
import { Div, Link, Text } from "@kits";
import { __map } from "@utils";

const footerLinks = {
  favouriteSongs: [
    {
      label: "playlists",
      link: "/favourites/playlists",
    },
    { label: "artists", link: "/favourites/artists" },
  ],
  favouritePoems: [
    { label: "poems", link: "/favourites/poems" },
    { label: "poets", link: "/favourites/poets" },
  ],
  favouriteShows: [
    { label: "movies", link: "/favourites/movies" },
    { label: "series", link: "/favourites/series" },
    { label: "anime", link: "/favourites/anime" },
  ],
};

export function FooterLinks(props) {
  return (
    <Div flex={["start", "start", "row"]} mx="-3">
      {__map(footerLinks, (links, group) => (
        <Div
          flex={["start", "start", "column"]}
          mx="3"
          // responsive={{ sm: { mx: 5 }, lg: { mx: 6 } }}
          key={group}
          mb="3"
        >
          <Div mb="4">
            <Text size="md-b">{`layout.footer.${group}`}</Text>
          </Div>
          {links.map(({ label, link }, i) => (
            <Link href={link} mb="3" key={i}>
              <Text
                hoverColor="text-secondary"
                size="sm-b"
              >{`layout.footer.${label}`}</Text>
            </Link>
          ))}
        </Div>
      ))}
    </Div>
  );
}
