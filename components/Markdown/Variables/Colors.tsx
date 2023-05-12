import Div from "@kits/Div";
import Tree from "@kits/Tree";
import SectionTitle from "@components/Layout/Title/SectionTitle";

const ColorVariables = (props) => {
  return (
    <Div id="colors" my="3">
      <SectionTitle title="markdown.variables.colors" tag="h4" />
      <Tree branches={colors} branchesAccessor="variants" defaultOpen={false} />
    </Div>
  );
};

const colors = [
  {
    title: "Brand",
    variants: [
      "main",
      "hover",
      "light",
      "lighter",
      "dark",
      "pale",
      "paler",
      "variant",
    ],
  },
  {
    title: "bg",
    variants: [
      {
        title: "primary",
        variants: [
          "main",
          "hover",
          "light",
          "lighter",
          "dark",
          "pale",
          "paler",
          "variant",
        ],
      },
      {
        title: "secondary",
        variants: [
          "main",
          "hover",
          "light",
          "lighter",
          "dark",
          "pale",
          "paler",
          "variant",
        ],
      },
      {
        title: "tertiary",
        variants: [
          "main",
          "hover",
          "light",
          "lighter",
          "dark",
          "pale",
          "paler",
          "variant",
        ],
      },
      {
        title: "disabled",
        variants: [
          "main",
          "hover",
          "light",
          "lighter",
          "dark",
          "pale",
          "paler",
          "variant",
        ],
      },
    ],
  },
  {
    title: "text",
    variants: [
      {
        title: "primary",
        variants: [
          "main",
          "hover",
          "light",
          "lighter",
          "dark",
          "pale",
          "paler",
          "variant",
        ],
      },
      {
        title: "secondary",
        variants: [
          "main",
          "hover",
          "light",
          "lighter",
          "dark",
          "pale",
          "paler",
          "variant",
        ],
      },
      {
        title: "tertiary",
        variants: [
          "main",
          "hover",
          "light",
          "lighter",
          "dark",
          "pale",
          "paler",
          "variant",
        ],
      },
      {
        title: "disabled",
        variants: [
          "main",
          "hover",
          "light",
          "lighter",
          "dark",
          "pale",
          "paler",
          "variant",
        ],
      },
    ],
  },
  {
    title: "assistive",
    variants: [
      {
        title: "success",
        variants: [
          "main",
          "hover",
          "light",
          "lighter",
          "dark",
          "pale",
          "paler",
          "variant",
        ],
      },
      {
        title: "error ",
        variants: [
          "main",
          "hover",
          "light",
          "lighter",
          "dark",
          "pale",
          "paler",
          "variant",
        ],
      },
      {
        title: "info",
        variants: [
          "main",
          "hover",
          "light",
          "lighter",
          "dark",
          "pale",
          "paler",
          "variant",
        ],
      },
      {
        title: "warning",
        variants: [
          "main",
          "hover",
          "light",
          "lighter",
          "dark",
          "pale",
          "paler",
          "variant",
        ],
      },
    ],
  },
  {
    title: "border",
    variants: [
      {
        title: "dark",
        variants: [
          "main",
          "hover",
          "light",
          "lighter",
          "dark",
          "pale",
          "paler",
          "variant",
        ],
      },
      {
        title: "light",
        variants: [
          "main",
          "hover",
          "light",
          "lighter",
          "dark",
          "pale",
          "paler",
          "variant",
        ],
      },
    ],
  },
];

export default ColorVariables;
