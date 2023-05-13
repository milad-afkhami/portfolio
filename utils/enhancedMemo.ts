import { memo } from "react";
import useComparer from "@hooks/useComparer";

const enhancedMemo = (component, ...properties) =>
  memo(component, useComparer(...properties));

export default enhancedMemo;
