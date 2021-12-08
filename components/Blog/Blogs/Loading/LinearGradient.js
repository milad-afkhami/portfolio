import React from "react";
import { c } from "@stylesheets";

export const LinearGradient = () => {
  return (
    <linearGradient id="fill">
      <stop offset="0.599964" stopColor={c("border-light")} stopOpacity={1}>
        <animate
          attributeName="offset"
          values="-2; -2; 1"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        />
      </stop>
      <stop offset="1.59996" stopColor={c("border-dark")} stopOpacity={1}>
        <animate
          attributeName="offset"
          values="-1; -1; 2"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        />
      </stop>
      <stop offset="2.59996" stopColor={c("border-light")} stopOpacity={1}>
        <animate
          attributeName="offset"
          values="0; 0; 3"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        />
      </stop>
    </linearGradient>
  );
};
