import { Div } from "style-wiz";
import Link from "@kits/Link";
import Button from "@kits/Button";
import GistCards from "@components/Cards/Gist";
import type { FC } from "react";

const homeGists = ["utility-types", "useIntersector", "vscode"];

interface HomeGistsProps {
  items: IGist[];
}

const HomeGists: FC<HomeGistsProps> = (props) => {
  const { items } = props;

  // const isMediumScreen = useMediaQuery({ minWidth: breakpoints.sm, maxWidth: breakpoints.lg });

  // const _items = items.filter(({ slug }) => homeGists.includes(slug));
  const _items = homeGists
    .map((slug) => items.find((it) => it.slug === slug))
    .filter(Boolean) as IGist[];

  return (
    <Div my="4">
      <GistCards items={_items} headingLevel={2} />
      <Link href="/gists" width="100%">
        <Button text="gists.seeMore" ns="home" block variant="outlined" />
      </Link>
    </Div>
  );
};

export default HomeGists;
