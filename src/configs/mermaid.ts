import type { MermaidConfig } from "mermaid";

export const mermaidPalette = {
  name: "Warm paper",
  background: "#fffcf7",
  border: "#ead6be",
  variables: {
    background: "#fffcf7",
    primaryColor: "#f6be89",
    primaryBorderColor: "#ae703d",
    primaryTextColor: "#39291f",
    lineColor: "#99613a",
    secondaryColor: "#e5edf5",
    tertiaryColor: "#fff3df",
    textColor: "#39291f",
    edgeLabelBackground: "#fffcf7",
  },
};

export function getMermaidConfig(): MermaidConfig {
  return {
    startOnLoad: false,
    securityLevel: "strict",
    suppressErrorRendering: true,
    theme: "base",
    look: "handDrawn",
    handDrawnSeed: 8,
    themeVariables: mermaidPalette.variables,
    fontFamily: '"Segoe UI", system-ui, sans-serif',
    flowchart: { htmlLabels: false, useMaxWidth: true, wrappingWidth: 280, padding: 20, rankSpacing: 48 },
  };
}
