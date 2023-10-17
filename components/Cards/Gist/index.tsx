import { Div } from "style-wiz";
import PageTitle from "@components/Layout/Title/Page";
import GistCard from "./Item";
import responsiveStyles from "@helpers/responsiveStyles";
import type { FC } from "react";
import type { IntRange } from "ts-wiz";

interface GistsProps {
  items: IGist[];
  headingLevel: IntRange<1, 3>;
}

const GistCards: FC<GistsProps> = (props) => {
  const { items, headingLevel } = props;

  return (
    <Div my="3">
      <PageTitle title="gists.title" tag={`h${headingLevel}`} />
      <Div
        grid={["repeat(1, 1fr)", , "4", "4"]}
        mb="4"
        styles={{
          gridAutoFlow: "row",
          ...responsiveStyles("md", { gridTemplateColumns: "repeat(3, 1fr)" }),
        }}
      >
        {items.map((post) => (
          <GistCard key={post.slug} {...post} />
        ))}
      </Div>
    </Div>
  );
};

export default GistCards;
