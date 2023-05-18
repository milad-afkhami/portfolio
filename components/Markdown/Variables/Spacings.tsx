import Div from "@kits/Div";
import Tree from "@kits/Tree";
import SectionTitle from "@components/Layout/Title/Section";
import spacings from "@stylesheets/constants/spacings.json";
import type { FC } from "react";

const SpacingVariables: FC = () => (
  <Div id="spacings" my="3">
    <SectionTitle title="markdown.variables.spacings" tag="h4" />
    <Tree
      branches={Object.keys(spacings).filter((a) => !a.includes("".imp()))}
      defaultOpen={false}
    />
  </Div>
);

export default SpacingVariables;
