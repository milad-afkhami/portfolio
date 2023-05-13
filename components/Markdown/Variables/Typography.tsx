import Div from "@kits/Div";
import Tree from "@kits/Tree";
import SectionTitle from "@components/Layout/Title/Section";
import typographyVariants from "@stylesheets/typography";

const TypographyVariables = (props) => {
  return (
    <Div id="typography" my="3">
      <SectionTitle title="markdown.variables.typography" tag="h4" />
      <Tree
        branches={Object.keys(typographyVariants.default)
          .filter((tp) => !tp.includes("-b"))
          .map((tp) => (tp += "[-b]"))}
      />
    </Div>
  );
};

export default TypographyVariables;
