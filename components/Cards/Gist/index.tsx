import { Div } from "style-wiz";
import SectionTitle from "@components/Layout/Title/Section";
import GistCard from "./Item";
import responsiveStyles from "@helpers/responsiveStyles";
import type { FC } from "react";

interface GistsProps {
  title?: string;
  items: IGist[];
}

const GistCards: FC<GistsProps> = (props) => {
  const { title, items, ...rest } = props;

  return (
    <Div my="3" {...rest}>
      <SectionTitle title={title} />
      <Div
        grid={["repeat(1, 1fr)", , "4", "4"]}
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
