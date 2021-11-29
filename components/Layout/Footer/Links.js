import React from "react";
import { Div, Link, Text } from "@kits";
import { __map } from "@utils";

const footerLinks = {
  favoriteSongs: [
    { label: "artists", link: "/favorites/artists" },
    {
      label: "playlists",
      link: "/favorites/playlists",
    },
  ],
  favoritePoems: [
    { label: "poems", link: "/favorites/poems" },
    { label: "poets", link: "/favorites/poets" },
  ],
  favoriteShows: [
    { label: "movies", link: "/favorites/movies" },
    { label: "series", link: "/favorites/series" },
    { label: "anime", link: "/favorites/anime" },
  ],
};

export function FooterLinks(props) {
  return (
    <Div flex={["start", "between"]}>
      {__map(footerLinks, (links, group) => (
        <Div
          flex={["start", "start", "column"]}
          responsive={{ lg: { mEnd: "6" } }}
        >
          <Div mb="4">
            <Text size="md-b">{`layout.footer.${group}`}</Text>
          </Div>
          {links.map(({ label, link }) => (
            <Link href={link} mb="3">
              <Text
                hoverColor="text-secondary"
                size="md"
              >{`layout.footer.${label}`}</Text>
            </Link>
          ))}
        </Div>
      ))}
    </Div>
  );
}
