import { memo } from "react";
import { useComparer } from "@hooks";



const enhancedMemo = (component, ...properties) =>
  memo(component, useComparer(...properties));

            export default enhancedMemo;