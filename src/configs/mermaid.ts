import type { MermaidConfig } from "mermaid";

export const mermaidPalettes = {
  light: {
    name: "Warm paper",
    background: "#fffcf7",
    border: "#ead6be",
    variables: {
      darkMode: false,
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
  },
  dark: {
    name: "Warm charcoal",
    background: "#171c24",
    border: "#45505e",
    variables: {
      darkMode: true,
      background: "#171c24",
      primaryColor: "#30313a",
      primaryBorderColor: "#f6be89",
      primaryTextColor: "#fff1e5",
      lineColor: "#f6be89",
      secondaryColor: "#25384a",
      tertiaryColor: "#3e352b",
      textColor: "#fff1e5",
      edgeLabelBackground: "#171c24",
    },
  },
};

export function getMermaidConfig(dark: boolean): MermaidConfig {
  return {
    startOnLoad: false,
    securityLevel: "strict",
    suppressErrorRendering: true,
    theme: "base",
    look: "handDrawn",
    handDrawnSeed: 8,
    themeVariables: mermaidPalettes[dark ? "dark" : "light"].variables,
    fontFamily: '"Segoe UI", system-ui, sans-serif',
    flowchart: { htmlLabels: false, useMaxWidth: true, wrappingWidth: 280, padding: 20, rankSpacing: 48 },
  };
}
