import { __get } from "@utils";

export function prepareRowAndColSpacings({ responsive = {}, row, col }) {
  return {
    responsive: {
      ...responsive,
      lg_only: {
        ...(responsive.lg_only || {}),
        ...(row && !__get(responsive, "lg_only.mx") ? { mx: "-2".imp() } : {}),
        ...(col && !__get(responsive, "lg_only.px") ? { px: "2".imp() } : {}),
      },
    },
  };
}
