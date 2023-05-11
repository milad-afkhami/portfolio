import React, { memo, ComponentType } from "react";
import { GlobalColors } from "./variables/colors";
import { GlobalTypographies } from "./variables/typography";
import { GlobalContainerStyle } from "./bootstrap/container";
import { GlobalGridSystem } from "./bootstrap/grid";
import { GlobalToastifyVariables } from "./toast";
import { GlobalSpacings } from "./variables/spacing";
import { GlobalCurves } from "./variables/curves";
import { GlobalPaces } from "./variables/paces";
import { GlobalShadows } from "./variables/shadows";

/**
 * @type {ComponentType}
 */
export const GlobalStyles = memo(() => {
  return (
    <>
      <GlobalColors />
      <GlobalTypographies />
      <GlobalContainerStyle />
      <GlobalGridSystem />
      <GlobalToastifyVariables />
      <GlobalSpacings />
      <GlobalCurves />
      <GlobalPaces />
      <GlobalShadows />
    </>
  );
});
