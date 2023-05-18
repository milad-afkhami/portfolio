import Div from "@kits/Div";
import Link from "@kits/Link";
import Text from "@kits/Text";
import { useMemo } from "react";
import FavouritesHelper from "@helpers/favourites";
import __capitalize from "lodash-es/capitalize";
import type { FC } from "react";

const FooterLinks: FC = () => {
  const favouritesLinks = useMemo(FavouritesHelper.getLinks, []);

  return (
    <Div flex={["start", "start", "row", "wrap"]} mx="-3">
      {favouritesLinks.map(({ links, group }, i) => (
        <Div key={i} flex={["start", "start", "column"]} mx="3" mb="3">
          <Div mb="4">
            <Text size="md-b">{`layout.footer.favourite${__capitalize(
              group
            )}s`}</Text>
          </Div>
          {links.map(({ label, link }, j) => (
            <Link href={link} mb="3" key={j}>
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
};

export default FooterLinks;
