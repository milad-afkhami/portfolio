import React, { memo, ComponentType } from "react";
import { GlobalColors } from "./variables/colors";
import { GlobalTypographies } from "./variables/typography";
import { GlobalContainerStyle } from "./bootstrap/container";
import { GlobalGridSystem } from "./bootstrap/grid";
import { GlobalToastifyVariables } from "./toast";

export const GlobalStyles: ComponentType = memo(() => {
  return (
    <>
      <GlobalColors />
      <GlobalTypographies />
      <GlobalContainerStyle />
      <GlobalGridSystem />
      <GlobalToastifyVariables />
    </>
  );
});
