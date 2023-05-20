import Div from "@kits/Div";
import SectionTitle from "@components/Layout/Title/Section";
import GistCard from "./Item";
import type { FC } from "react";

interface GistsProps {
  title?: string;
  items: Array<IGist>;
}

const GistCards: FC<GistsProps> = (props) => {
  const { title, items, ...rest } = props;

  return (
    <Div my="3" {...rest}>
      <SectionTitle title={title} />
      <Div
        grid={["repeat(1, 1fr)", , "1rem", "1rem"]}
        css={{ gridAutoFlow: "row" }}
        responsive={{ md: { css: { gridTemplateColumns: "repeat(3, 1fr)" } } }}
      >
        {items.map((post, i) => (
          <GistCard key={i} {...post} />
        ))}
      </Div>
    </Div>
  );
};

export default GistCards;
