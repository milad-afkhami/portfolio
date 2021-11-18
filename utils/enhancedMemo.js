import { memo } from "react";
import { useComparer } from "@hooks";

export const enhancedMemo = (component, ...properties) =>
  memo(component, useComparer(...properties));
